<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Route::get('/testing', function (Request $request){
//     return 'hello testing';
// });

//category
Route::post('/createcategory',[CategoryController::class,'create']);
Route::get('/findcategory/{id}', [CategoryController::class, 'findcategory']);
Route::get('/getallcategory', [CategoryController::class, 'getall']);



//product
Route::post('/insertproduct', [ProductController::class,'createpro']);
Route::get('/viewproduct', [ProductController::class,'getpro']);
Route::get('/viewproduct/{id}', [ProductController::class, 'getproByID']);
Route::put('/updateproduct/{id}', [ProductController::class, 'updatepro']);
Route::delete('/deleteproduct/{id}', [ProductController::class,'removepro']);