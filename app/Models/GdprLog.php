<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GdprLog extends Model
{
    protected $table = 'gdpr_logs';

    protected $fillable = [
        'identifier',
        'event'
    ];

    public static function LogEvent($identifier, $event)
    {
        GdprLog::create(
            [
                'identifier' => hash('sha512', $identifier ),
                'event' => $event
            ]
        );
    }
}