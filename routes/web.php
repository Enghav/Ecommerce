<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/test', function(){
    return 'hello';
});


Route::get('/hello', function(Request $request){
    return 'hello from route';
});