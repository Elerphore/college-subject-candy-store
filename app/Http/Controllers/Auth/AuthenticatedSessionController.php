<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
//        return Inertia::render('Auth/Login', [
//            'canResetPassword' => Route::has('password.request'),
//            'status' => session('status'),
//        ]);
    }

    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        if (!Auth::attempt($request->only('login', 'password'))) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $user = User::where('login', $request['login'])->firstOrFail();
        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => "OK"
        ]);
    }
}
