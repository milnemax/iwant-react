<?php

namespace App\Http\Controllers;

use App\Models\EmailPreference;
use App\Models\GdprLog;
use App\Models\Unsubscribe;
use App\Models\User;
use App\Pivots\EmailPreferenceUser;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpFoundation\StreamedResponse;

class UserController extends Controller
{
    public function closeAccount(Request $request): RedirectResponse
    {
        $user = Auth::user();

        $valid = $request->validate([
            'user_unsubscribe' => 'nullable'
        ]);

        if ((bool)$valid['user_unsubscribe']) {
            EmailPreferenceUser::where('user_id', $user->id)->delete();

            Unsubscribe::firstOrCreate([
                'email' => Unsubscribe::hashEmail($user->email)
            ]);
        }

        GdprLog::logEvent($user->email, 'Account Closed');

        $user->delete();

        Auth::logout();

        return redirect('/')->with('success', 'Your account has been closed');
    }

    public function exportDetails(Request $request): StreamedResponse
    {
        $user = Auth::user();

        $valid = $request->validate([
            'user_export' => 'required|in:xml,csv,tsv'
        ]);

        $recipientOf = '';
        $recipientOfUsers = User::whereHas('contacts', function($query) use($user) {
            $query->where('user_id', $user->id);
        })->get();

        foreach($recipientOfUsers as $recipientUser) {
            $recipientOf .= ($recipientOf === '' ? '' : ', ') . $recipientUser->name;
        }

        switch($valid['user_export']) {
            case 'xml':
                return response()->streamDownload(function () use($user, $recipientOf) {
                    $output = "<?xml version='1.0' encoding='UTF-8' ?>\r\n";
                    $output .= "<user>\r\n";
                    $output .= "\t<name>{$user->name}</name>\r\n";
                    $output .= "\t<email>{$user->email}</email>\r\n";
                    $output .= "\t<birth_day>{$user->birth_day}</birth_day>\r\n";
                    $output .= "\t<birth_month>{$user->birth_month}</birth_month>\r\n";
                    $output .= "\t<recipient_of>{$recipientOf}</recipient_of>\r\n";
                    $output .= "</user>\r\n";

                    echo $output;
                }, 'iwantiwant-user-details.xml');
            case 'csv':
                return response()->streamDownload(function () use($user, $recipientOf) {
                    $output = "\"user\",\"email\",\"birth_day\",\"birth_month\",\"recipient_of\"\r\n";
                    $output .= "\"{$user->name}\",\"{$user->email}\",\"{$user->birth_day}\",\"{$user->birth_month}\",\"{$recipientOf}\"\r\n";

                    echo $output;
                }, 'iwantiwant-user-details.csv');
            case 'tsv':
                return response()->streamDownload(function () use($user, $recipientOf) {
                    $output = "user\temail\tbirth_day\tbirth_month\trecipient_of\r\n";
                    $output .= "{$user->name}\t{$user->email}\t{$user->birth_day}\t{$user->birth_month}\t{$recipientOf}\r\n";

                    echo $output;
                }, 'iwantiwant-user-details.txt');
        }
    }

    public function index(Request $request): Response
    {
        $user = Auth::user();

        $user->load('emailPreferences');

        $notifications = $user->emailPreferences->contains('id', EmailPreference::PUBLISH);
        $offerNotifications = $user->emailPreferences->contains('id', EmailPreference::OFFER);

        return Inertia::render('private/details')
            ->with('notifications', $notifications)
            ->with('offerNotifications', $offerNotifications);
    }

    public function update(Request $request): RedirectResponse
    {
        $user = Auth::user();

        $valid = $request->validate([
            'user_name' => 'required',
            'user_email' => ['required', 'email', Rule::unique('users', 'email')->ignore($user->id)],
            'user_birth_day' => 'required|between:0,31',
            'user_birth_month' => 'required|between:0,12'
        ]);

        if ($valid['user_email'] !== $user->email) {
            $hashedOldEmail = Unsubscribe::hashEmail($user->email);

            GdprLog::logEvent($valid['user_email'], "Email Changed From: {$hashedOldEmail}");
        }

        $user->update([
            'name' => $valid['user_name'],
            'email' => $valid['user_email'],
            'birth_day' => $valid['user_birth_day'] === 0 ? null : $valid['user_birth_day'],
            'birth_month' => $valid['user_birth_month'] === 0 ? null : $valid['user_birth_month']
        ]);

        return redirect('/details')->with('success', "Your details have been updated");
    }

    public function updatePassword(Request $request): RedirectResponse
    {
        $user = Auth::user();

        $valid = $request->validate([
            'current_password' => ['required', 'string', 'current_password'],
            'password' => ['required', 'confirmed', Password::min(6)->mixedCase()->numbers()],
        ]);

        $user->update([
            'password' => $valid['password']
        ]);

        return redirect('/details')->with('success', 'Your password has been changed');
    }

    public function updatePermissions(Request $request): RedirectResponse
    {
        $user = Auth::user();

        $valid = $request->validate([
            'user_publish_notifications' => 'nullable',
            'user_offer_notifications' => 'nullable',
        ]);

        if((bool)($valid['user_publish_notifications'] ?? false) || (bool)($valid['user_offer_notifications'] ?? false)) {
            Unsubscribe::where('email', Unsubscribe::hashEmail($user->email))->delete();
        }

        $this->setEmailPreference($user, (bool)($valid['user_publish_notifications'] ?? false), EmailPreference::find(EmailPreference::PUBLISH));
        $this->setEmailPreference($user, (bool)($valid['user_offer_notifications'] ?? false), EmailPreference::find(EmailPreference::OFFER));

        return redirect('/details')->with('success', '\'Your notification preferences have been changed');
    }

    private function setEmailPreference(User $user, bool $allow, EmailPreference $emailPreference): void
    {
        $hasPreference = $user->emailPreferences()->where('id', $emailPreference->id)->exists();

        if ($hasPreference !== $allow) {
            if ($allow) {
                EmailPreferenceUser::create([ 'email_preference_id' => $emailPreference->id, 'user_id' => $user->id ]);

                GdprLog::logEvent($user->email, 'Allow ' . $emailPreference->name . ' Notifications');
            } else {
                EmailPreferenceUser::where('email_preference_id', $emailPreference->id)
                    ->where('user_id', $user->id)
                    ->delete();

                GdprLog::logEvent($user->email, 'Stop ' . $emailPreference->name . ' Notifications');
            }
        }
    }
}