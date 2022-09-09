<?php

use App\Http\Controllers\Api\UserController;
use App\Models\User;
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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return User::all();
// });


Route::post("/register", [UserController::class, "register"]);
Route::post("/login", [UserController::class, "login"]);
// Route::post("/registerAdmin", [UserController::class, "registerAdmin"]);
Route::post("/loginAdmin", [UserController::class, "loginAdmin"]);

Route::group(["middleware"=>"auth:api"], function(){
    // Only Admin Routes
    Route::group(['middleware' => ['role:admin']], function () {
        Route::get("/users", function(){
                return User::all();
        });
    });
    
});