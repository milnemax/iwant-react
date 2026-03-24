<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\GdprLog;
use App\Models\Unsubscribe;
use App\Models\User;
use App\Pivots\EmailPreferenceUser;
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

    public function unsubscribeViaForm(Request $request): RedirectResponse
    {
        $valid = $request->validate([
            'unsubscribe_email' => 'required|email'
        ]);

        $this->unsubscribeUser($valid['unsubscribe_email']);

        Unsubscribe::firstOrCreate([
            'email' => Unsubscribe::hashEmail($valid['unsubscribe_email'])
        ]);

        GdprLog::logEvent($valid['unsubscribe_email'], 'Unsubscribed');

        return redirect('/unsubscribe')->with('success', $valid['unsubscribe_email'] . ' has been unsubscribed.');
    }

    public function unsubscribeViaLink(Request $request, Contact $contact, string $hash): RedirectResponse
    {
        if ($hash === Unsubscribe::hashEmail($contact->email)) {

            $this->unsubscribeUser($contact->email);

            Unsubscribe::firstOrCreate([
                'email' => Unsubscribe::hashEmail($contact->email)
            ]);

            GdprLog::logEvent($contact->email, 'Unsubscribed');

            return redirect('/unsubscribe')->with('success', $contact->email . ' has been unsubscribed.');
        } else {
            return redirect('/unsubscribe')->with('error',  'An error occurred with your unsubscribe link use the form below instead');
        }
    }

    private function unsubscribeUser(string $email, ?int $preference = null): void
    {
        $user = User::where('email', $email)->first();

        if ($user) {
            if ($preference) {
                EmailPreferenceUser::where('user_id', $user->id)
                    ->where('email_preference_id', $preference)
                    ->delete();
            } else {
                EmailPreferenceUser::where('user_id', $user->id)
                    ->delete();
            }
        }
    }
}