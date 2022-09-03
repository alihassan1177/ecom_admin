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
        $validate = Validator::make($request->all(), [
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
        $token = $user->createToken('MyApp')->accessToken;
        return response()->json(["token"=> $token, "user"=> $user->name]);
    }

    public function login(Request $request)
    {
        $validate = Validator::make($request->all(), [
            "email" => "required|email",
            "password" => "required|min:6"
        ]);

        if ($validate->fails()) {
            return response()->json(["error" => $validate->errors()->all()], 422);
        }

        if (Auth::attempt(["email"=>$request['email'], "password" => $request["password"]])) {
            $user = Auth::user();
            $token = $user->createToken('MyApp')->accessToken;
            return response()->json(["token"=> $token, "user"=> $user->name]);            
        }
    }
}
