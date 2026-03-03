<?php

namespace App\Actions\Fortify;

use App\Concerns\PasswordValidationRules;
use App\Concerns\ProfileValidationRules;
use App\Models\EmailPreference;
use App\Models\GdprLog;
use App\Models\Role;
use App\Models\Unsubscribe;
use App\Models\User;
use App\Pivots\EmailPreferenceUser;
use App\Pivots\RoleUser;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules, ProfileValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input): User
    {
         Validator::make($input, [
            ...$this->profileRules(),
            'password' => $this->passwordRules(),
            'terms' => 'required'
         ])->validate();

        $user = User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => $input['password'],
        ]);

        // Add Role as User
        RoleUser::create([ 'role_id' => Role::USER, 'user_id' => $user->id ]);

        GdprLog::logEvent($user->email, 'Registration');

        // Check notification permissions as set as required
        if ((int)($input['publish_notifications'] ?? 0) === 1) {
            EmailPreferenceUser::create([ 'email_preference_id' => EmailPreference::PUBLISH, 'user_id' => $user->id ]);

            GdprLog::logEvent($user->email, 'Allow Publish Notifications');
        }

        if ((int)($input['offer_notifications'] ?? 0) === 1) {
            EmailPreferenceUser::create([ 'email_preference_id' => EmailPreference::OFFER, 'user_id' => $user->id ]);

            GdprLog::logEvent($user->email, 'Allow Offer Notifications');
        }

        // Cancel any previous unsubscribes
        Unsubscribe::where('email', Unsubscribe::hashEmail($user->email))->delete();

        return $user;
    }
}
