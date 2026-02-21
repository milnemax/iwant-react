<?php

namespace App\Pivots;

use App\Models\Contact;
use App\Models\WishList;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ContactWishList extends Pivot
{
    protected $table = 'contact_wish_list';

    public $timestamps = false;

    public function contact(): BelongsTo
    {
        return $this->belongsTo(Contact::class);
    }

    public function wishList(): BelongsTo
    {
        return $this->belongsTo(WishList::class);
    }
}