<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ListController;
use App\Http\Controllers\ListItemController;
use App\Http\Controllers\LookUpController;
use App\Http\Controllers\SharedListController;
use App\Http\Controllers\ShoppingListController;
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
    ->name('contact-destroy');


Route::get('dashboard', [DashboardController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('dashboard');


Route::get('details', function () {
    return Inertia::render('details');
})->middleware(['auth', 'verified'])->name('details');


Route::get('lists', [ListController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('lists');

Route::post('lists', [ListController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('lists-store');

Route::get('lists/{list}', [ListController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('list-show');

Route::put('lists/{list}', [ListController::class, 'update'])
    ->middleware(['auth', 'verified'])
    ->name('list-update');

Route::put('lists/{list}/share', [ListController::class, 'share'])
    ->middleware(['auth', 'verified'])
    ->name('list-share');

Route::delete('lists/{list}', [ListController::class, 'destroy'])
    ->middleware(['auth', 'verified'])
    ->name('list-destroy');


Route::post('lists/{list}/items', [ListItemController::class, 'store'])
    ->middleware(['auth', 'verified'])
    ->name('list-items-store');

Route::get('lists/{list}/items/{item}/edit', [ListItemController::class, 'edit'])
    ->middleware(['auth', 'verified'])
    ->name('list-item-edit');

Route::put('lists/{list}/items/{item}', [ListItemController::class, 'update'])
    ->middleware(['auth', 'verified'])
    ->name('list-item-update');

Route::delete('lists/{list}/items/{item}', [ListItemController::class, 'destroy'])
    ->middleware(['auth', 'verified'])
    ->name('list-item-destroy');


Route::get('look-up/search', [LookUpController::class, 'search'])
    ->middleware(['auth', 'verified'])
    ->name('look-up-search');


Route::get('shared-lists', [SharedListController::class, 'index'])
    ->middleware(['auth', 'verified'])
    ->name('shared-lists');


Route::get('shopping-list', [ShoppingListController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('shopping-list');

Route::post('/shopping-list/{item}/bought', [ShoppingListController::class, 'markAsBought'])
    ->name('shopping-list-mark-bought');