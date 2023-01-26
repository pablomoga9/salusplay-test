<?php

use App\Http\Controllers\categoriesController;
use App\Http\Controllers\recipesController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

//Grupo rutas recetas

Route::controller(recipesController::class)->group(function(){
    Route::get('/api/recipes','index');
    Route::get('/api/recipes/{slug}','show');
    Route::post('/api/recipes/create','store');
    Route::delete('/api/recipes/delete/{id}','destroy');
    Route::get('/api/recipes/{id}/edit','edit');
    Route::put('/api/recipes/{id}/update','update');
});

Route::controller(categoriesController::class)->group(function(){
    Route::get('/api/categories','index');
    Route::get('/api/categories/list','categoryList');
    Route::get('/api/categories/{slug}','show');
    Route::post('/api/categories/create','store');
    Route::delete('/api/categories/delete/{id}','destroy');
    Route::get('/api/categories/{id}/edit','edit');
    Route::put('/api/categories/{id}/update','update');
});

Route::get('/dbconn',function(){
    return view('dbconn');
});
