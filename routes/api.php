<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\TransactionControllers;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthenticatedSessionController::class, 'store']);

Route::post('/registration', [RegisteredUserController::class, 'store']);

Route::get('/products', [ProductController::class, 'getProducts']);

Route::middleware('auth:sanctum')->put('/products', [ProductController::class, 'createTransaction']);

Route::middleware('auth:sanctum')->get('/transactions', [TransactionController::class, 'getUserTransactions']);

Route::middleware('auth:sanctum')->post('/transactions', [TransactionController::class, 'orderFinished']);

Route::middleware('auth:sanctum')->get('/users', [UserController::class, 'getUsers']);

Route::middleware('auth:sanctum')->delete('/user', [UserController::class, 'deleteUser']);

Route::middleware('auth:sanctum')->delete('/product', [ProductController::class, 'deleteProduct']);

Route::middleware('auth:sanctum')->delete('/transaction', [TransactionController::class, 'deleteTransaction']);

Route::middleware('auth:sanctum')->patch('/user', [UserController::class, 'updateUser']);

Route::middleware('auth:sanctum')->patch('/product', [ProductController::class, 'updateProduct']);

Route::middleware('auth:sanctum')->patch('/transaction', [TransactionController::class, 'updateTransaction']);
