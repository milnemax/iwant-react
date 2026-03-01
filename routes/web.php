<?php

use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\ListController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

#region "Public"

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

Route::get('/shared-list/{list}/{code}', [ListController::class, 'sharedList'])
    ->name('shared-list');

Route::post('shared-list', [ListController::class, 'sharedListFromCode'])
    ->name('verify-shared-list-form');

#endregion

#region "Private"

Route::get('contacts', function () {
    return Inertia::render('contacts');
})->middleware(['auth', 'verified'])->name('contacts');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('details', function () {
    return Inertia::render('details');
})->middleware(['auth', 'verified'])->name('details');

Route::get('lists', function () {
    return Inertia::render('lists');
})->middleware(['auth', 'verified'])->name('lists');

#endregion

#region "Admin"

Route::get('admin', function () {
    return Inertia::render('admin');
})->middleware(['auth', 'administrator'])->name('admin');

#endregion

require __DIR__.'/settings.php';
