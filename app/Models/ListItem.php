<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class ListItem extends Model
{
    protected $table = 'list_items';

    protected $fillable = [
        'wish_list_id',
        'list_item_category_id',
        'name',
        'url',
        'description'
    ];

    protected function casts(): array
    {
        return [
            'wish_list_id' => 'int',
            'list_item_category_id' => 'int',
            'due_date' => 'datetime',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }

    protected $appends = [
        'claimed'
    ];

    public function wishList(): BelongsTo
    {
        return $this->belongsTo(WishList::class);
    }

    public function listItemCategory(): BelongsTo
    {
        return $this->belongsTo(ListItemCategory::class);
    }

    public function contacts(): BelongsToMany
    {
        return $this->belongsToMany(Contact::class)
            ->withPivot('type', 'message', 'bought');
    }

    public function offers(): BelongsToMany
    {
        return $this->belongsToMany(Contact::class)
            ->wherePivot('type', 'offer')
            ->withPivot('type', 'message');
    }

    protected function claimed(): Attribute
    {
        return Attribute::make(
            get: fn (): bool => $this->contacts()->wherePivot('type', 'claim')->exists(),
        );
    }
}