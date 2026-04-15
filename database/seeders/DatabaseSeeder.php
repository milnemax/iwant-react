<?php

namespace Database\Seeders;

use App\Models\Contact;
use App\Models\EmailPreference;
use App\Models\GdprLog;
use App\Models\ListItem;
use App\Models\ListItemCategory;
use App\Models\ListType;
use App\Models\Role;
use App\Models\Unsubscribe;
use App\Models\User;
use App\Models\WishList;
use App\Pivots\ContactListItem;
use App\Pivots\ContactWishList;
use App\Pivots\EmailPreferenceUser;
use App\Pivots\RoleUser;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $admin = $this->generateUser('Administrator', 'admin', true);
        $user = $this->generateUser('Max', 'max', false);
        $this->generateUser('Sandy', 'sandy', false);

        $this->generateWishList($admin);
        $list = $this->generateWishList($user);

        $this->generateContact($admin, 'Max', 'max');
        $this->generateContact($admin, 'Christine', 'christine');
        $this->generateContact($admin, 'Sandy', 'sandy');
        $contact = $this->generateContact($user, 'Administrator', 'admin');
        $contactTwo = $this->generateContact($user, 'Sandy', 'sandy');

        $this->assignContactToList($list, $contact);
        $this->assignContactToList($list, $contactTwo);

        $this->assignContactToListItem($list->items->first(), $contact);
        $this->assignContactToListItem($list->items->last(), $contactTwo, 'offer');

        $this->unsubscribeEmail('sandy');
    }

    private function assignContactToList(WishList $list, Contact $contact): void
    {
        ContactWishList::create(
            [
                'contact_id' => $contact->id,
                'wish_list_id' => $list->id,
                'code' => 'ABCD' . $contact->id
            ]
        );
    }

    private function assignContactToListItem(ListItem $item, Contact $contact, string $type = 'claim'): void
    {
        ContactListItem::create(
            [
                'contact_id' => $contact->id,
                'list_item_id' => $item->id,
                'type' => $type,
                'message' => $type === 'offer' ? 'I will go halves on this with someone' : null
            ]
        );
    }

    private function generateContact(User $user, string $name, string $emailPrefix): Contact
    {
        $contact = Contact::create([
            'owner_id' => $user->id,
            'user_id' => User::where('email', $emailPrefix . '@milnedevelopment.co.uk')->first()->id ?? null,
            'name' => $name,
            'email' => $emailPrefix . '@milnedevelopment.co.uk'
        ]);

        GdprLog::logEvent($emailPrefix . '@milnedevelopment.co.uk', 'Contact Added By ' . $user->id);

        return $contact;
    }

    private function generateUser(string $name, string $emailPrefix, bool $asAdmin): User
    {
        $user = User::create([
            'name' => $name,
            'email' => $emailPrefix . '@milnedevelopment.co.uk',
            'password' => Hash::make('Pass1234!'),
            'email_verified_at' => Carbon::now(),
        ]);

        RoleUser::create([ 'role_id' => Role::USER, 'user_id' => $user->id ]);

        if ($asAdmin) {
            RoleUser::create([ 'role_id' => Role::ADMIN, 'user_id' => $user->id ]);
        }

        GdprLog::logEvent($emailPrefix . '@milnedevelopment.co.uk', 'Registration');

        EmailPreferenceUser::create([ 'email_preference_id' => EmailPreference::PUBLISH, 'user_id' => $user->id ]);

        GdprLog::logEvent($emailPrefix . '@milnedevelopment.co.uk', 'Allow Publish Notifications');

        EmailPreferenceUser::create([ 'email_preference_id' => EmailPreference::OFFER, 'user_id' => $user->id ]);

        GdprLog::logEvent($emailPrefix . '@milnedevelopment.co.uk', 'Allow Offer Notifications');

        return $user;
    }

    private function generateWishList(User $user): WishList
    {
        $type = ListType::where('name', 'Christmas')->first();

        $list = WishList::create(
            [
                'user_id' => $user->id,
                'list_type_id' => $type->id,
                'name' => 'Christmas ' . Carbon::now()->addYear()->year,
                'due_date' => Carbon::createFromFormat('Y-m-d', Carbon::now()->addYear()->year . '-12-25')
            ]
        );

        $category = ListItemCategory::where('name', 'Books')->first();

        ListItem::create(
            [
                'wish_list_id' => $list->id,
                'list_item_category_id' => $category->id,
                'name' => 'Stephen King',
                'description' => 'Carrie, Bag of Bones, Under the Dome'
            ]
        );

        $category = ListItemCategory::where('name', 'Tech')->first();

        ListItem::create(
            [
                'wish_list_id' => $list->id,
                'list_item_category_id' => $category->id,
                'name' => 'Laptop',
                'description' => 'Gaming laptop, 6k screen, latest processor and graphics card'
            ]
        );

        $category = ListItemCategory::where('name', 'Smellies')->first();

        ListItem::create(
            [
                'wish_list_id' => $list->id,
                'list_item_category_id' => $category->id,
                'name' => 'Shaving Set',
                'description' => 'Shower gel, shaving gel and aftershave'
            ]
        );

        return $list;
    }

    private function unsubscribeEmail(string $emailPrefix): void
    {
        $user = User::where('email', $emailPrefix . '@milnedevelopment.co.uk')->first();

        if ($user) {
            EmailPreferenceUser::where('user_id', $user->id)->delete();
        }

        Unsubscribe::firstOrCreate(
            [
                'email' => Unsubscribe::hashEmail($emailPrefix . '@milnedevelopment.co.uk')
            ]
        );

        GdprLog::logEvent($emailPrefix . '@milnedevelopment.co.uk', 'Unsubscribed');
    }
}
