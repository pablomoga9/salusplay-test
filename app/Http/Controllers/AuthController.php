<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\User;

class AuthController extends Controller
{
   
    public function login(Request $request){

        // $users = User::where(['password','name'],$request->name)->first();
        // echo $users;

        if(!Auth::attempt($request->only('name','password'))){
            return response()->json(['message'=>'Unauthorized'],401);
        }

        $user = User::where('name',$request['name'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;


        return response()
        ->json([
            'message'=>'Hi'. $user->name,
            'accessToken'=> $token,
            'token_type'=>'Bearer',
            'user'=>$user
        ]);
    }

    public function logout(){
        auth()->user()->tokens()->delete();

        return [
            'message' => 'Successfully logged out'
        ];
    }
}
