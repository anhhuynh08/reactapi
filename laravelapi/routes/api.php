<?php

use App\Http\Controllers\API\StudentController;
use App\Http\Controllers\API\BrandController;
use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ProductController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//Student
Route::get('/students', [StudentController::class, 'index']);
Route::post('/add-student',[StudentController::class, 'store']);
Route::get('/edit-student/{id}',[StudentController::class, 'edit']);
Route::put('update-student/{id}',[StudentController::class, 'update']);
Route::delete('delete-student/{id}',[StudentController::class, 'destroy']);


//Brand
Route::get('brand',[BrandController::class, 'index']);
Route::post('/add-brand',[BrandController::class, 'store']);
Route::delete('delete-brand/{id}',[BrandController::class, 'destroy']);
Route::get('edit-brand/{id}',[BrandController::class, 'edit']);
Route::put('update-brand/{id}',[BrandController::class, 'update']);

//Category
Route::post('/add-category',[CategoryController::class, 'store']);
Route::get('/category',[CategoryController::class, 'index']);
Route::get('edit-category/{id}',[CategoryController::class, 'edit']);
Route::put('update-category/{id}',[CategoryController::class, 'update']);
Route::delete('delete-category/{id}',[CategoryController::class, 'destroy']);



//Product
Route::post('add-product',[ProductController::class, 'store']);
Route::get('add-product',[ProductController::class, 'add_product']);
Route::get('product',[ProductController::class, 'index']);
Route::get('edit-product/{id}',[ProductController::class, 'edit']);
Route::put('update-product/{id}',[ProductController::class, 'update']);
Route::delete('delete-product/{id}',[ProductController::class, 'destroy']);

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
