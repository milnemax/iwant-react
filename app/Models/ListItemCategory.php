<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ListItemCategory extends Model
{
    protected $table = 'list_item_categories';

    public $timestamps = false;

    protected $fillable = [
        'name'
    ];
}