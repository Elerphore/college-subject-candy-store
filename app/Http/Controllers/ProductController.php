<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Transaction;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

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

    function deleteProduct(Request $request) {
        Product::destroy($request->id);
    }

    function updateProduct(Request $request) {
        $product = Product::where('id', $request->id)->first();

        if($request->hasFile('image_file')) {
            $image = $request->file('image_file');
            $img_name = $image->getClientOriginalName();
            $image->move(public_path('/candy'), $img_name);
        }

        $product->name = $request->name;
        $product->amount = $request->amount;
        $product->image = $request->image;
        $product->save();

    }
}
