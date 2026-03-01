<?php

namespace App\Http\Controllers;


use App\Mail\ContactUs;
use App\Models\GdprLog;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactUsController extends Controller
{
    public function send(Request $request): RedirectResponse
    {
        $validated_data = $request->validate([ 'message' => 'required|string' ]);

        GdprLog::logEvent('guest', 'Controller Message: ' . $validated_data['message']);

        Mail::to(config('mail.system.address'))->send(new ContactUs($validated_data['message']));

        return redirect('/privacy')->with('success', 'Your message has been sent to the controller.');
    }

}