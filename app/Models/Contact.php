<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Contact extends Model
{
    protected $table = 'contacts';

    protected $fillable = [
        'owner_id',
        'user_id',
        'name',
        'email'
    ];

    protected function casts(): array
    {
        return [
            'owner_id' => 'int',
            'user_id' => 'int',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
        ];
    }

    protected $appends = [
        'unsubscribed',
        'can_send_offer',
        'can_send_share'
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'owner_id', 'id');
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getUnsubscribedAttribute(): bool
    {
        return Unsubscribe::where('email', Unsubscribe::hashEmail($this->email))->exists();
    }

    public function getCanSendOfferAttribute(): bool
    {
        if ($this->user) {
            return $this->user->hasVerifiedEmail()
                && $this->user->emailPreferences()->where('id', EmailPreference::OFFER)->exists();
        }

        return !$this->unsubscribed;
    }

    public function getCanSendShareAttribute(): bool
    {
        if ($this->user) {
            return $this->user->hasVerifiedEmail()
                && $this->user->emailPreferences()->where('id', EmailPreference::PUBLISH)->exists();
        }

        return !$this->unsubscribed;
    }
}