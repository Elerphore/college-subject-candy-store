<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Transaction;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    function getUserTransactions(Request $request): JsonResponse
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

    function getTransactions() {
        return response()->json([
            'transactions' => Transaction::all()
        ]);
    }

    function orderFinished(Request $request) {
        $sum = 0;
        $products = "";
        $user = $request->user();

        foreach ($request->transactions as $item) {
            $tran = Transaction::where('id', $item)->first();
            $tran->update(['status' => 'COMPLETED']);

            $product = Product::where('id', $tran->product_id)->first();

            $sum = $sum + $product->amount;
            $products = $products."<li>Название: {$product->name}, Цена: {$product->amount}</li>";
        }
        $pdf = App::make('dompdf.wrapper');

        $html = "<html><style>body { font-family: DejaVu Sans }</style>".
            "<body>".
            "<h1>Магазин кондитерских изделий: Candy Store</h1>".
            "<h1>Чек: на сумму: {$sum}</h1>".
            "<h1>Логин: {$user->login}</h1>".
            "<h1>Почта: {$user->email}</h1>".
            "<ul>Товары: {$products}</ul>".
            "</body>".
            "</html>";


        return PDF::loadHTML($html)->save(public_path('/check.pdf'))->stream('download.pdf');
    }

    function deleteTransaction(Request $request) {
        Transaction::destroy($request->id);
    }
}
