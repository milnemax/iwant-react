<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\GdprLog;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    public function destroy(Contact $contact): RedirectResponse
    {
        $contactName = $contact->name;

        $user = Auth::user();

        if ($contact->owner_id === $user->id) {
            GdprLog::logEvent($contact->email, 'Contact Deleted By ' . $user->id);

            $contact->delete();

            return redirect('/contacts')->with('success', 'Contact "'.$contactName.'" deleted');
        }

        return redirect('/contacts')->with('error', 'An error occurred deleting your contact "'.$contactName.'", please refresh the page and try again');
    }

    public function index(): Response
    {
        $user = Auth::user();

        $contacts = Contact::where('owner_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->paginate(5);

        return Inertia::render('private/contacts', [
            'contacts' => $contacts
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $user = Auth::user();

        $valid = $request->validate([
            'contact_name' => 'required',
            'contact_email' => 'required|email'
        ]);

        $contact = Contact::create(
            [
                'owner_id' => $user->id,
                'user_id' => User::where('email', $valid['contact_email'])->first()->id ?? null,
                'name' => $valid['contact_name'],
                'email' => $valid['contact_email']
            ]
        );

        GdprLog::logEvent($valid['contact_email'], 'Contact Added By ' . $user->id);

        return redirect('/contacts')->with('success', 'Contact '.$contact->name.' added.');
    }
}