<?php

namespace App\Http\Controllers;

use App\Models\ListItem;
use App\Pivots\ContactListItem;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ShoppingListController extends Controller
{
    public function markAsBought(ListItem $item): RedirectResponse
    {
        $user = Auth::user();

        $pivot = ContactListItem::where('list_item_id', $item->id)
            ->whereHas('contact', function($query) use($user) {
                $query->where('user_id', $user->id);
            })
            ->first();

        if ($pivot instanceof ContactListItem) {
            ContactListItem::where('list_item_id', $item->id)
                ->whereHas('contact', function($query) use($user) {
                    $query->where('user_id', $user->id);
                })
                ->update(['bought' => 1]);

            return redirect('/shopping-list')->with('success', "{$item->name} has been marked as booked.");
        } else {
            return redirect('/shopping-list')->with('error', 'An error occurred updating this item, please refresh and try again.');
        }
    }

    public function show(): Response
    {
        $user = Auth::user();

        $listItems = ListItem::whereHas('contacts', function($query) use($user) {
                $query->where('user_id', $user->id);
            })
            ->with('wishList.user', 'wishList.listType', 'listItemCategory', 'contacts', 'offers')
            ->orderBy('wish_list_id')
            ->orderBy('list_item_category_id')
            ->get();

        $lists = $listItems
            ->map(function ($item) use ($user) {
                    $offers = $item->offers
                        ->reverse()
                        ->map(fn ($offer) => [
                            'name' => $offer->name,
                            'message' => $offer->pivot->message,
                        ])
                        ->values();

                return [
                    'list_id' => $item->wish_list_id,
                    'listItem' => $item,
                    'bought' => (bool)($item->contacts->firstWhere('user_id', $user->id)?->pivot->bought ?? false),
                    'offers' => $offers,
                ];
            })
            ->groupBy('list_id')
            ->map(function ($items, $listId) {
                $first = $items->first()['listItem']->wishList;

                return [
                    'id' => $listId,
                    'name' => $first->name,
                    'description' => "({$first->user->name}) - {$first->listType->name} - {$first->due_date->format('jS M Y')}",
                    'items' => $items->values(),
                ];
            });

        return Inertia::render('private/shopping-list', [
            'shoppingLists' => $lists->values()
        ]);
    }
}