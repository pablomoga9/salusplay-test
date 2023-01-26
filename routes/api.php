<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    Route::post('/logout', [AuthController::class, 'logout']);
    return $request->user();
});


