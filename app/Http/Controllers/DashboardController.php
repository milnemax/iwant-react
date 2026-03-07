<?php

namespace App\Http\Controllers;

use App\Models\EmailPreference;
use App\Models\ListItem;
use App\Models\WishList;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $user = Auth::user();

        return Inertia::render('private/dashboard', [
            'contactsCount' => $user->contacts()->count(),
            'offerNotifications' => $user->emailPreferences()->where('id', EmailPreference::OFFER)->exists(),
            'privateListsCount' => $user->lists()->whereDoesntHave('contacts')->count(),
            'publishedListsCount' => $user->lists()->whereHas('contacts')->count(),
            'publishNotifications' => $user->emailPreferences()->where('id', EmailPreference::PUBLISH)->exists(),
            'sharedListsCount' => WishList::whereHas('contacts', function($query) use($user) { $query->where('user_id', $user->id); })->count(),
            'shoppingItemsCount' => ListItem::whereHas('contacts', function($query) use($user) { $query->where('user_id', $user->id); })->count(),
            'toBuyItemsCount' => ListItem::whereHas('contacts', function($query) use($user) { $query->where('user_id', $user->id)->where(DB::raw('`contact_list_item`.`bought`'), '=', 0); })->count(),
        ]);
    }
}