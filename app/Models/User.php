<?php

namespace App\Models;

use App\Mail\VerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Mail;

class User extends Authenticatable implements MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'birth_day',
        'birth_month'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'created_at' => 'datetime',
            'updated_at' => 'datetime',
            'birth_day' => 'int',
            'birth_month' => 'int',
        ];
    }

    protected $appends = [
        'is_admin'
    ];

    protected $with = [
        'roles'
    ];


    public function emailPreferences(): BelongsToMany
    {
        return $this->belongsToMany(EmailPreference::class);
    }

    public function roles(): BelongsToMany
    {
        return $this->belongsToMany(Role::class);
    }

    public function contacts(): HasMany
    {
        return $this->hasMany(Contact::class, 'owner_id');
    }

    public function recipients(): HasMany
    {
        return $this->hasMany(Contact::class, 'user_id');
    }

    public function lists(): HasMany
    {
        return $this->hasMany(WishList::class);
    }

    protected function isAdmin(): Attribute
    {
        return Attribute::make(
            get: fn (): bool => $this->roles()->where('id', Role::ADMIN)->exists(),
        );
    }

    public function sendEmailVerificationNotification(): void
    {
        GdprLog::logEvent($this->email, 'Verification email sent');

        Mail::to($this->email)->send(new VerifyEmail($this));
    }
}
