<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    function getUserTransactions(Request $request): \Illuminate\Http\JsonResponse
    {
        $user = $request->user();

        $collection = DB::table('transactions')->
            join('products' , 'transactions.product_id' , '=','products.id') ->
            select ('transactions.id', 'transactions.status' ,'products.name', 'products.amount', 'transactions.created_at')
            ->where('transactions.user_id' , $user->id)
            ->where('transactions.status', $request->type)
            ->get();

        return response()->json([
            'transactions' => $collection
        ]);
    }

    function orderFinished(Request $request) {
        foreach ($request->transactions as $item) {
            Transaction::where('id', $item)->update(['status' => 'COMPLETED']);
        }

        return response()->json([
            'message' => 'ok'
        ]);
    }
}
