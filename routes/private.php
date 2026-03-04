<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('contacts', function () {
    return Inertia::render('contacts');
})->middleware(['auth', 'verified'])->name('contacts');

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