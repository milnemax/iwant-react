<?php

use App\Http\Controllers\AdminController;

Route::get('admin', [AdminController::class, 'stats'])
    ->middleware(['auth', 'administrator'])
    ->name('admin');

Route::get('admin/gdpr', [AdminController::class, 'gdpr'])
    ->middleware(['auth', 'administrator'])
    ->name('admin-gdpr');
