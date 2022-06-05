<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function getUsers(): JsonResponse
    {
        $users = User::all();
        return response()->json([
            'users' => $users
        ]);
    }
}
