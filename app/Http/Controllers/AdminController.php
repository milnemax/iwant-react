<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\EmailPreference;
use App\Models\GdprLog;
use App\Models\Unsubscribe;
use App\Models\User;
use App\Models\WishList;
use App\Pivots\ContactListItem;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function gdpr(Request $request): Response
    {
        $searchTerm = $request->input('search', '');
        $query = GdprLog::orderBy('created_at', 'desc');

        if (!empty($searchTerm)) {
            $query->where('identifier', Unsubscribe::hashEmail($searchTerm));
        }

        return Inertia::render('admin/gdpr', [
            'results' =>  $query->paginate(10),
            'search' => $searchTerm,
        ]);
    }

    public function stats(): Response
    {
        $emails = GdprLog::where('event', 'like', 'Share Notification -%')
            ->orWhere('event', 'like', 'Offer Notification -%')
            ->count();

        $emailableContacts = 0;
        foreach(Contact::distinct()->pluck('email') as $email) {
            if (!Unsubscribe::where('email', Unsubscribe::hashEmail($email))->exists()) {
                $emailableContacts++;
            }
        }

        $stats = [
            'Users' => User::count(),
            'with share notifications' => User::whereHas('emailPreferences', function($query) { $query->where('id', EmailPreference::PUBLISH); })->count(),
            'with offer notifications' => User::whereHas('emailPreferences', function($query) { $query->where('id', EmailPreference::OFFER); })->count(),
            'one' => 'spacer',
            'Unique Contacts' => Contact::distinct()->count('email'),
            'Emailable Contacts' => $emailableContacts,
            'two' => 'spacer',
            'Lists' => WishList::count(),
            'published' => WishList::whereHas('contacts')->count(),
            'offers' => ContactListItem::where('type', 'offer')->count(),
            'claims' => ContactListItem::where('type', 'claim')->count(),
            'three' => 'spacer',
            'Emails Sent' => $emails,
            'Unsubscribes' => Unsubscribe::count()
        ];

        return Inertia::render('admin/stats', [
            'stats' => $stats,
        ]);
    }
}