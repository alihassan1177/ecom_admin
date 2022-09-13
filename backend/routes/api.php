<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\UserController;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post("/register", [UserController::class, "register"]);
Route::post("/login", [UserController::class, "login"]);
Route::post("/registerAdmin", [UserController::class, "registerAdmin"]);
Route::post("/loginAdmin", [UserController::class, "loginAdmin"]);

Route::group(["middleware"=>"auth:api"], function(){
    // Only Admin Routes
    Route::group(['middleware' => ['role:admin']], function () {
        Route::get("/users", function(){
                return User::all();
        });
        // Product Routes
        Route::post("/product/create", [ProductController::class, "create"]);
        Route::post("/product/delete/{id}", [ProductController::class, "delete"]);
        Route::post("/product/update/{id}", [ProductController::class, "update"]);
    });
    
});

Route::get("/categories",[CategoryController::class, "index"]);
Route::get("/products",[ProductController::class, "index"]);