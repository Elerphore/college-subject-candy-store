<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    function getUsers(): JsonResponse
    {
        $users = User::all();
        return response()->json([
            'users' => $users
        ]);
    }

    function addUser(Request $request) {
        $user = new User();
        $user->login = $request->login;
        $user->email = $request->email;
        $user->isAdmin = $request->isAdmin;
        $user->password = Hash::make($request->password);
        $user->save();
    }

    function deleteUser(Request $request) {
        User::destroy($request->id);
    }

    function updateUser(Request $request) {
        $user = User::where('id', $request->id)->first();

        $user->login = $request->login;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->isAdmin = $request->isAdmin;
        $user->save();
    }
}
