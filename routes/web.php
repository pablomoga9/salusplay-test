<?php

use Illuminate\Http\Request;
use App\Http\Controllers\categoriesController;
use App\Http\Controllers\recipesController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return view('welcome');
});



Route::controller(recipesController::class)->group(function(){
    Route::get('/admin/recipes','index');
    Route::get('/admin/recipes/{slug}','show');
    Route::post('/admin/recipes/create','store');
    Route::delete('/admin/recipes/delete/{id}','destroy');
    Route::get('/admin/recipes/{id}/edit','edit');
    Route::put('/admin/recipes/{id}/update','update');
});

Route::controller(categoriesController::class)->group(function(){
    Route::get('/admin/categories','index');
    Route::get('/admin/categories/list','categoryList');
    Route::get('/admin/categories/{slug}','show');
    Route::post('/admin/categories/create','store');
    Route::delete('/admin/categories/delete/{id}','destroy');
    Route::get('/admin/categories/{id}/edit','edit');
    Route::put('/admin/categories/{id}/update','update');
});

Route::controller(AuthController::class)->group(function(){
    Route::post('/login','login');
    
});

Route::middleware(['auth:sanctum'])->group(function(){
    Route::get('/logout',[AuthController::class,'logout']);
});


Route::get('/dbconn',function(){
    return view('dbconn');
});
