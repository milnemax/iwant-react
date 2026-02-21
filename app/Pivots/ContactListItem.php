<?php

namespace App\Pivots;

use App\Models\Contact;
use App\Models\ListItem;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ContactListItem extends Pivot
{
    protected $table = 'contact_list_item';

    public $timestamps = false;

    protected $fillable = [
        'contact_id',
        'list_item_id',
        'type',
        'message',
        'bought'
    ];

    protected function casts(): array
    {
        return [
            'bought' => 'bool'
        ];
    }

    public function contact(): BelongsTo
    {
        return $this->belongsTo(Contact::class);
    }

    public function listItem(): BelongsTo
    {
        return $this->belongsTo(ListItem::class);
    }
}