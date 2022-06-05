<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    function getUserTransactions(Request $request): Collection
    {
        $user = $request->user();

        $collection = DB::table('transactions')->
            join('products' , 'transactions.product_id' , '=','products.id') ->
            select ('transactions.id', 'products.name', 'products.amount', 'products.image')
            ->where('transactions.user_id' , $user->id)
            ->where('transactions.status', $request->type)
            ->get();

        return $collection;
    }
}
