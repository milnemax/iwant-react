<?php
namespace App\Mail;

use App\Models\Contact;
use App\Models\EmailPreference;
use App\Models\ListItem;
use App\Pivots\ContactWishList;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OfferNotification extends Mailable
{
    use Queueable, SerializesModels;

public Contact $contact;
public ListItem $item;
public string $code;
public string $unsubscribe;

    public function __construct(Contact $contact, ListItem $listItem)
    {
        $share = ContactWishList::where('wish_list_id', $listItem->wish_list_id)->where('contact_id', $contact->id)->first();

        $this->code = $share->code;
        $this->contact = $contact;
        $this->item = $listItem;
        $this->unsubscribe = "/{$contact->id}/" . hash('sha512', $contact->email );
    }

    public function build()
    {
        return $this->subject('iWantiWant - Your offer has been updated')
            ->markdown('emails.offer-notification');
    }
}