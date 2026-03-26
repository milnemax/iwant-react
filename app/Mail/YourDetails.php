<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class YourDetails extends Mailable
{
    use Queueable, SerializesModels;

    public string $contacts;
    public string $email;
    public string $unsubscribe;
    public ?User $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(array $details)
    {
        $this->email = $details['email'];
        $this->user = $details['user'] ?? null;
        $this->contacts = $details['contacts'] ?? '';
        $this->unsubscribe = isset($details['contact']) ? "/{$details['contact']->id}/" . hash('sha512', $details['contact']->email ) : '';
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('iWantiWant - Your Personal Details')
            ->markdown('emails.your-details');
    }
}