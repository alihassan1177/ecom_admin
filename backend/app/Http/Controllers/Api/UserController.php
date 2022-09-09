<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request)
    {
        $validate = Validator::make($request->json()->all(), [
            "name" => "required|min:6",
            "email" => "required|email",
            "password" => "required|min:6"
        ]);

        if ($validate->fails()) {
            return response()->json(["error" => $validate->errors()->all()], 422);
        }

        
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $role = config('roles.models.role')::where('name', '=', 'User')->first();
        $user->attachRole($role);
        $token = $user->createToken('MyApp')->accessToken;
        return response()->json(["token"=> $token, "name"=> $user->name, "email" => $user->email]);            
    }

    public function login(Request $request)
    {
        $validate = Validator::make($request->json()->all(), [
            "email" => "required|email",
            "password" => "required|min:6"
        ]);

        if ($validate->fails()) {
            return response()->json(["error" => $validate->errors()->all()], 401);
        }

        if (Auth::attempt(["email"=>$request->json()->all()['email'], "password" => $request->json()->all()['password']])) {
            $user = Auth::user();
            $token = $user->createToken('MyApp')->accessToken;
            return response()->json(["token"=> $token, "name"=> $user->name, "email" => $user->email]);            
        }else{
            return response()->json(["error"=>["User Credentials does not match"]], 401);
        }
    }

    public function registerAdmin(Request $request)
    {
        $validate = Validator::make($request->json()->all(), [
            "name" => "required|min:6",
            "email" => "required|email",
            "password" => "required|min:6"
        ]);

        if ($validate->fails()) {
            return response()->json(["error" => $validate->errors()->all()], 422);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $role = config('roles.models.role')::where('name', '=', 'Admin')->first();
        $user->attachRole($role);
        $token = $user->createToken('MyApp')->accessToken;
        return response()->json(["token"=> $token, "name"=> $user->name, "email" => $user->email]);
    }

    public function loginAdmin(Request $request)
    {
        $validate = Validator::make($request->json()->all(), [
            "email" => "required|email",
            "password" => "required|min:6"
        ]);

        if ($validate->fails()) {
            return response()->json(["error" => $validate->errors()->all()], 401);
        }

        if (Auth::attempt(["email"=>$request->json()->all()['email'], "password" => $request->json()->all()['password']])) {
            $user = Auth::user();

            if (!$user->isAdmin()) {
                return response()->json(["error"=> ["You don't have permission to access Admin Panel"]], 403);            
            }

            $token = $user->createToken('MyApp')->accessToken;
            return response()->json(["token"=> $token, "name"=> $user->name, "email" => $user->email]);            
        }else{
            return response()->json(["error"=>["User Credentials does not match"]], 401);
        }
    }
}
