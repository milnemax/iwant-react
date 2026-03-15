<?php

namespace App\Http\Controllers;

use App\Mail\ShareNotification;
use App\Models\GdprLog;
use App\Models\ListType;
use App\Models\Unsubscribe;
use App\Models\User;
use App\Models\WishList;
use App\Pivots\ContactWishList;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class ListController extends Controller
{
    public function destroy(WishList $list): RedirectResponse
    {
        $listName = $list->name;

        $user = Auth::user();

        if ($list->user_id === $user->id) {
            $list->delete();

            return redirect('/lists')->with('success', 'List "'.$listName.'" deleted');
        } else {
            session()->flash('error', 'An error occurred deleting your list please refresh the page and try again');
        }

        return redirect('/lists')->with('error', 'An error occurred deleting your list "'.$listName.'", please refresh the page and try again');
    }

    public function index(): Response
    {
        $user = Auth::user();

        $lists = WishList::where('user_id', $user->id)
            ->withExists('contacts')
            ->with('listType')
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        $listTypes = ListType::orderBy('name')->get();

        $christmas = $this->getNextChristmas();
        $birthday = $this->getNextBirthday($user);

        return Inertia::render('private/lists', [
            'lists' => $lists,
            'listTypes' => $listTypes,
            'christmas' => $christmas,
            'birthday' => $birthday,
            'christmasTypeId' => ListType::CHRISTMAS,
            'birthdayTypeId' => ListType::BIRTHDAY,
        ]);
    }

    public function show(WishList $list): Response|RedirectResponse
    {
        $user = Auth::user();

        if ($list->user_id !== $user->id) {
            return redirect('/lists');
        }

        $list->load('listType', 'contacts');

        $listTypes = ListType::orderBy('name')->get();
        $items = $list->items()
            ->with('listItemCategory')
            ->orderBy('list_item_category_id')
            ->orderBy('name')
            ->paginate(5);

        $christmas = $this->getNextChristmas();
        $birthday = $this->getNextBirthday($user);

        $listContacts = [];
        foreach($user->contacts as $contact) {
            $listContacts[] = [
                'id' => $contact->id,
                'name' => $contact->name,
                'listLabel' => ($list->contacts->where('id', $contact->id)->count() === 1)
                    ? ($contact->unsubscribed ?  'share code: ' . $list->id . '_' . $list->contacts->where('id', $contact->id)->first()->pivot->code : $contact->email)
                    : ($contact->unsubscribed ? 'unable to email' : $contact->email),
                'shared' => ($list->contacts->where('id', $contact->id)->count() === 1)
            ];
        }

        return Inertia::render('private/list', [
            'list' => $list,
            'items' => $items,
            'contacts' => $listContacts,
            'listTypes' => $listTypes,
            'christmas' => $christmas,
            'birthday' => $birthday,
            'christmasTypeId' => ListType::CHRISTMAS,
            'birthdayTypeId' => ListType::BIRTHDAY,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $user = Auth::user();

        $valid = $request->validate([
            'list_name' => 'required',
            'list_type' => 'required|exists:list_types,id',
            'due_date' => 'required|date|after_or_equal:tomorrow'
        ]);

        $list = WishList::create([
            'user_id' => $user->id,
            'list_type_id' => $valid['list_type'],
            'name' => $valid['list_name'],
            'due_date' => $valid['due_date']
        ]);

        return redirect('/lists')->with('success', 'List '.$list->name.' added.');
    }

    public function update(Request $request, Wishlist $list): RedirectResponse
    {
        $user = Auth::user();

        if ($user->id !== $list->user_id) {
            return redirect('/lists');
        }

        $valid = $request->validate([
            'list_name' => 'required',
            'list_type' => 'required|exists:list_types,id',
            'due_date' => 'required|date|after_or_equal:tomorrow'
        ]);

        $list->update([
            'list_type_id' => $valid['list_type'],
            'name' => $valid['list_name'],
            'due_date' => $valid['due_date']
        ]);

        return redirect("/lists/{$list->id}")->with('success', "List {$list->name} has been updated!");
    }

    #region "Next Dates"

    private function getNextBirthday(User $user): string
    {
        if ($user->birth_day && $user->birth_month) {
            $date = Carbon::createFromDate(Carbon::now()->year, $user->birth_month, $user->birth_day);

            if ($date->startOfDay() <= Carbon::now()->startOfDay()) {
                return $date->addYear()->format('Y-m-d');
            }

            return $date->format('Y-m-d');
        }

        return '';
    }

    private function getNextChristmas(): string
    {
        $date = Carbon::createFromDate(Carbon::now()->year, 12, 25);

        if ($date->startOfDay() <= Carbon::now()->startOfDay()) {
            return $date->addYear()->format('Y-m-d');
        }

        return $date->format('Y-m-d');
    }

    #endregion

    #region "Sharing Lists"

    public function share(Request $request, WishList $list): RedirectResponse
    {
        $user = Auth::user();

        if ($list->user_id !== $user->id) {
            return redirect('/lists');
        }

        $contacts = $request->input('contacts', []);

        foreach($contacts as $contact) {
            ContactWishList::firstOrCreate(
                [
                    'contact_id' => $contact,
                    'wish_list_id' => $list->id
                ],
                [
                    'code' =>  $this->getUniqueCode()
                ]
            );
        }

        ContactWishList::where('wish_list_id', $list->id)
            ->whereNotIn('contact_id', $contacts)
            ->delete();

        $this->sendListNotifications($list);

        return redirect("/lists/{$list->id}")
            ->with('success', "Your lists share status has been updated");
    }

    private function getUniqueCode(): string
    {
        $code = Str::random(8);

        if (ContactWishList::where('code', $code)->exists()) {
            return $this->getUniqueCode();
        }

        return $code;
    }

    private function sendListNotifications(WishList $list): void
    {
        foreach($list->contacts()->get() as $contact) {
            if ($contact->can_send_share) {
                $hasPrevEmail = GdprLog::where('identifier', Unsubscribe::hashEmail($contact->email))
                    ->where('event', "Share Notification - {$list->id}")
                    ->where('created_at', '>', Carbon::now()->subWeek())
                    ->exists();

                if (!$hasPrevEmail) {
                    GdprLog::logEvent($contact->email, "Share Notification - {$list->id}");

                    Mail::to($contact->email)->send(new ShareNotification($contact, $list));
                }
            }
        }
    }

    #endregion
}