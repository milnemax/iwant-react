<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Unsubscribe extends Model
{
    protected $table = 'unsubscribes';

    protected $fillable = [
        'email'
    ];

    public static function hashEmail(string $email): string
    {
        return hash('sha512', $email );
    }
}