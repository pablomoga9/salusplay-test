<?php

use App\Http\Controllers\categoriesController;
use App\Http\Controllers\recipesController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//Grupo rutas recetas

Route::controller(recipesController::class)->group(function(){
    Route::get('/api/recipes','index');
    Route::get('/api/recipes/{slug}','show');
});

Route::controller(categoriesController::class)->group(function(){
    Route::get('/api/categories','index');
    Route::get('/api/categories/{slug}','show');
});

Route::get('/dbconn',function(){
    return view('dbconn');
});
