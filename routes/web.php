<?php

use Illuminate\Http\Request;
use App\Http\Controllers\categoriesController;
use App\Http\Controllers\recipesController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group(['middleware' => ['cors']], function () {
    
Route::controller(recipesController::class)->group(function(){
    Route::get('/api/recipes','index');
    Route::get('/api/recipes/{slug}','show');
    Route::post('/api/admin/recipes/create','store');
    Route::delete('/api/admin/recipes/delete/{id}','destroy');
    Route::get('/api/admin/recipes/{id}/edit','edit');
    Route::put('/api/admin/recipes/{id}/update','update');
});


Route::controller(categoriesController::class)->group(function(){
    Route::get('/api/categories','index');
    Route::get('/api/admin/categories/list','categoryList');
    Route::get('/api/categories/{slug}','show');
    Route::post('/api/admin/categories/create','store');
    Route::delete('/api/admin/categories/delete/{id}','destroy');
    Route::get('/api/admin/categories/{id}/edit','edit');
    Route::put('/api/admin/categories/{id}/update','update');
});

Route::controller(AuthController::class)->group(function(){
    Route::post('/login','login');
    
});

Route::middleware(['auth:sanctum'])->group(function(){
  
    Route::get('/logout',[AuthController::class,'logout']);
});

});
// Route::get('/dbconn',function(){
//     return view('dbconn');
// });
