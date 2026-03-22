<?php

namespace App\Http\Controllers;

use App\Mail\OfferNotification;
use App\Models\Contact;
use App\Models\GdprLog;
use App\Models\ListItem;
use App\Models\WishList;
use App\Pivots\ContactListItem;
use App\Pivots\ContactWishList;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;
use Inertia\Response;

class SharedListController extends Controller
{
    public function index(): Response
    {
        $user = Auth::user();

        $lists = WishList::whereHas('contacts', function($query) use($user) { $query->where('user_id', $user->id); })
            ->with('contacts', 'listType')
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        return Inertia::render('private/shared-lists', [
            'lists' => $lists
        ]);
    }

    public function sharedList(int $list, string $code): Response
    {
        $shared = ContactWishList::where('wish_list_id', $list)
            ->where('code', $code)
            ->first();

        $list = $shared->wishList ?? null;
        $list?->load(['contacts', 'listType']);

        $items = $list ? $list->items()
            ->with('listItemCategory', 'contacts', 'offers')
            ->orderBy('list_item_category_id')
            ->orderBy('name')
            ->get() : null;

        if ($items) {
            $sharedItems = $items
                ->map(function ($item) use ($shared) {
                    $offers = $item->offers
                        ->reverse()
                        ->map(fn ($offer) => [
                            'name' => $offer->name,
                            'message' => $offer->pivot->message,
                        ])
                        ->values();

                    return [
                        'listItem' => $item,
                        'claimedBy' => $item->contacts->firstWhere('pivot.type', 'claim')?->id ?? 0,
                        'offerByViewer' => $item->contacts
                            ->where('id', $shared->id ?? 0)
                            ->firstWhere('pivot.type', 'offer') !== null,
                        'offers' => $offers,
                    ];
                });
        }

        return Inertia::render('shared-list', [
            'list' => $list,
            'contact' => $shared->contact ?? null,
            'items' => $sharedItems ?? null,
            'code' => $code
        ]);
    }

    public function sharedListFromCode(Request $request): RedirectResponse
    {
        $valid = $request->validate(
            [
                'view_list_code' => 'required|regex:/^[0-9]*_[0-9A-Z]*$/i'
            ]
        );

        $codeParts = explode('_', $valid['view_list_code']);

        return redirect("/shared-list/{$codeParts[0]}/{$codeParts[1]}");
    }

    // #region Actions

    public function claim(Request $request, int $list, string $code)
    {
        $shared = ContactWishList::where('wish_list_id', $list)
            ->where('code', $code)
            ->first();

        if (!$shared instanceof ContactWishList) {
            return redirect("/shared-list/{$list}/{$code}");
        }

        $listItem = $shared->wishList->items()->where('id', $request->input('itemId', 0))->first();

        if (!$listItem instanceof ListItem || $listItem->claimed) {
            return redirect("/shared-list/{$list}/{$code}")
                ->with('error', 'An error occurred claiming this item please refresh and try again.');
        }

        ContactListItem::create([
            'contact_id' => $shared->contact_id,
            'list_item_id' => $listItem->id,
            'type' => 'claim'
        ]);

        return redirect("/shared-list/{$list}/{$code}")
            ->with('success', "You have claimed {$listItem->name}");
    }

    public function offer(Request $request, int $list, string $code)
    {
        $shared = ContactWishList::where('wish_list_id', $list)
            ->where('code', $code)
            ->first();

        if (!$shared instanceof ContactWishList) {
            return redirect("/shared-list/{$list}/{$code}");
        }

        $listItem = $shared->wishList->items()->where('id', $request->get('itemId', 0))->first();

        if (!$listItem instanceof ListItem || $listItem->claimed) {
            return redirect("/shared-list/{$list}/{$code}")
                ->with('error', 'An error occurred creating this offer, please refresh and try again.');
        }

        $valid = $request->validate([
            'message' => 'required'
        ]);

        ContactListItem::firstOrCreate([
            'contact_id' => $shared->contact_id,
            'list_item_id' => $listItem->id,
            'type' => 'offer',
            'message' => $valid['message']
        ]);

        if (ContactListItem::where('list_item_id', $listItem->id)->count() === 1) {
            $successMessage = 'Your offer has been created.';
        } else {
            $successMessage = 'Your message has been added to this offer.';
        }

        $this->sendOfferNotifications($listItem, $shared->contact);

        return redirect("/shared-list/{$list}/{$code}")
            ->with('success', $successMessage);
    }

    private function sendOfferNotifications(ListItem $listItem, Contact $contact): void
    {
        foreach($listItem->offers()->where('id', '<>', $contact->id)->get() as $emailContact) {
            if ($emailContact->can_send_offer) {
                GdprLog::logEvent($emailContact->email, "Offer Notification - {$listItem->id}");

                Mail::to($emailContact->email)->send(new OfferNotification($emailContact, $listItem));
            }
        }
    }

    // #endregion
}