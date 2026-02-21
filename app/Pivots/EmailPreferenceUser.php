<?php

namespace App\Pivots;

use Illuminate\Database\Eloquent\Relations\Pivot;

class EmailPreferenceUser extends Pivot
{
    protected $table = 'email_preference_user';

    public $timestamps = false;
}