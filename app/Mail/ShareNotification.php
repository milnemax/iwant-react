<?php

namespace App\Mail;

use App\Models\Contact;
use App\Models\WishList;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ShareNotification extends Mailable
{
    use Queueable, SerializesModels;

    public Contact $contact;
    public string $code;
    public string $unsubscribe;
    public WishList $list;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Contact $contact, WishList $list)
    {
        $this->code = $contact->pivot->code;
        $this->contact = $contact;
        $this->list = $list;
        $this->unsubscribe = "/{$contact->id}/" . hash('sha512', $contact->email );
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('iWantiWant - A list has been shared with you')
            ->markdown('emails.share-notification');
    }
}