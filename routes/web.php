<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\RoutesController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
/**
 * Входная точка приложения
 */
Route::get('/{any}', [MainController::class, 'main'])->where('any', '.*')->name('home');
Route::group(['prefix' => 'user'], function () {
    Route::post('info', [UserController::class, 'info'])->name('getUserInfo');
});
Route::post('get-free-menu', [MenuController::class, 'getFreeMenu'])->name('getFreeMenu');
Route::post('get-routers', [RoutesController::class, 'getRoutes'])->name('getRoutes');

Auth::routes();
Route::group(['middleware' => ['throttle:120,1']], function () {
    Route::group(['middleware' => ['auth:sanctum']], function () {
        Route::group(['prefix' => 'user'], function () {

        });
        Route::post('get-lk-menu', [MenuController::class, 'getLkMenu'])->name('getLkMenu');
        Route::group(['middleware' => ['role']], function () {
            Route::middleware('ip')->group(function () {
                /**
                 * Раздел куда допускаются только определённые ip
                 */
            });
            Route::post('get-admin-menu', [MenuController::class, 'getAdminMenu'])->name('getAdminMenu');
        });
    });
});



