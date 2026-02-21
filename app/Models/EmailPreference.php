<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmailPreference extends Model
{
    protected $table = 'email_preferences';

    protected $fillable = [
        'name'
    ];

    const PUBLISH = 1;
    const OFFER = 2;
}