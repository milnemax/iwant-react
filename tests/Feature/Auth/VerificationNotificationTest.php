<?php

use App\Mail\VerifyEmail;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

test('sends verification notification', function () {
    Mail::fake();

    $user = User::where('email', 'admin@milnedevelopment.co.uk')->first();
    $user->email_verified_at = null;
    $user->save();

    $this->actingAs($user)
        ->post(route('verification.send'))
        ->assertRedirect(route('home'));

    Mail::assertSent(VerifyEmail::class);
});

test('does not send verification notification if email is verified', function () {
    Mail::fake();

    $user = User::where('email', 'admin@milnedevelopment.co.uk')->first();
    $user->email_verified_at = \Carbon\Carbon::now();
    $user->save();

    $this->actingAs($user)
        ->post(route('verification.send'))
        ->assertRedirect(route('dashboard', absolute: false));

    Mail::assertNothingSent();
});