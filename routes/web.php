<?php

use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\SharedListController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('privacy', function () {
    return Inertia::render('privacy');
})->name('privacy');

Route::post('/privacy', [ContactUsController::class, 'send'])
    ->name('contact-us-form');

Route::get('recipients', function () {
    return Inertia::render('recipients');
})->name('recipients');

Route::get('unsubscribe', function () {
    return Inertia::render('unsubscribe');
})->name('unsubscribe');

Route::get('/shared-list/{list}/{code}', [SharedListController::class, 'sharedList'])
    ->name('shared-list');

Route::post('/shared-list/{list}/{code}/claim', [SharedListController::class, 'claim'])
    ->name('shared-list-claim');

Route::post('/shared-list/{list}/{code}/offer', [SharedListController::class, 'offer'])
    ->name('shared-list-offer');

Route::post('shared-list', [SharedListController::class, 'sharedListFromCode'])
    ->name('verify-shared-list-form');

require __DIR__.'/admin.php';
require __DIR__.'/private.php';
require __DIR__.'/settings.php';
