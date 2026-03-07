<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('contacts', [ContactController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('contacts');

Route::post('contacts', [ContactController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('contacts-store');

Route::delete('contacts/{contact}', [ContactController::class, 'destroy'])
    ->middleware(['auth', 'verified'])
    ->name('contacts-destroy');

Route::get('dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');

Route::get('details', function () {
    return Inertia::render('details');
})->middleware(['auth', 'verified'])->name('details');

Route::get('lists', function () {
    return Inertia::render('lists');
})->middleware(['auth', 'verified'])->name('lists');

Route::get('shared-lists', function () {
    return Inertia::render('shared-lists');
})->middleware(['auth', 'verified'])->name('shared-lists');

Route::get('shopping-list', function () {
    return Inertia::render('shopping-list');
})->middleware(['auth', 'verified'])->name('shopping-list');