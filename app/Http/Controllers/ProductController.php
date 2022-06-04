<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function getProducts(): \Illuminate\Http\JsonResponse
    {
        $products = Product::all();
        return response()->json([
            'products' => $products
        ]);
    }

    function createTransaction(Request $request) {
        $user =  $request->user();
    }
}
