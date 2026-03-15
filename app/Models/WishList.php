<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WishList extends Model
{
    protected $table = 'wish_lists';

    protected $fillable = [
        'user_id',
        'list_type_id',
        'name',
        'due_date'
    ];

    protected function casts(): array
    {
        return [
            'user_id' => 'int',
            'list_type_id' => 'int',
            'due_date' => 'datetime',
        ];
    }

    protected $appends = [
        'owner'
    ];

    protected $with = [
        'user'
    ];

    public function listType(): BelongsTo
    {
        return $this->belongsTo(ListType::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function items(): HasMany
    {
        return $this->hasMany(ListItem::class, 'wish_list_id', 'id');
    }

    public function contacts(): BelongsToMany
    {
        return $this->belongsToMany(Contact::class)
            ->withPivot('code');
    }

    protected function owner(): Attribute
    {
        return Attribute::make(
            get: function (): string { return $this->user->name ?? 'n/a'; },
        );
    }
}