<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ListType extends Model
{
    protected $table = 'list_types';

    public $timestamps = false;

    protected $fillable = [
        'name'
    ];

    public const CHRISTMAS = 3;
    public const BIRTHDAY = 2;
}