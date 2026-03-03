<?php

namespace App\Mail;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Support\Facades\URL;
use Illuminate\Queue\SerializesModels;

class VerifyEmail extends Mailable
{
    use Queueable, SerializesModels;

    public string $contactUsUrl = '';
    public string $name = '';
    public string $url = '';

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->name = $user->name;
        $this->url = $this->verificationUrl($user);
        $this->contactUsUrl = config('app.url') . '/privacy#contact_controller';
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('iWantiWant - Email Verification')
            ->markdown('emails.verify-email');
    }

    protected function verificationUrl(User $user)
    {
        return URL::temporarySignedRoute(
            'verification.verify',
            Carbon::now()->addMinutes(config('auth.verification.expire')),
            [
                'id' => $user->id,
                'hash' => sha1($user->email),
            ]
        );
    }
}