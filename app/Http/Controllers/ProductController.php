<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Transaction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function getProducts(): JsonResponse
    {
        $products = Product::all();
        return response()->json([
            'products' => $products
        ]);
    }

    function createTransaction(Request $request) {
        $user =  $request->user();
        $transaction = new Transaction();

        $transaction->user_id = $user->id;
        $transaction->product_id = $request->product_id;
        $transaction->status = 'INCOMPLETED';
        $transaction->created_at = now();

        $transaction->save();
    }
}