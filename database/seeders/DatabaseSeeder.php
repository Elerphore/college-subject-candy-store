<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'login' => 'user',
            'email' => 'user@gmail.com',
            'password' => Hash::make('user'),
            'isAdmin' => 0
        ]);

        DB::table('users')->insert([
            'login' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin'),
            'isAdmin' => 1
        ]);

        DB::table('products')->insert([
            'name' => 'Халва',
            'amount' => 100,
            'image' => 'Халва.jpg'
        ]);

        DB::table('products')->insert([
            'name' => 'Безе',
            'amount' => 0,
            'image' => 'Безе.jpg'
        ]);

        DB::table('products')->insert([
            'name' => 'Пастила',
            'amount' => 0,
            'image' => 'Пастила.jpg'
        ]);

        DB::table('products')->insert([
            'name' => 'Марципан',
            'amount' => 0,
            'image' => 'Марципан.jpg'
        ]);

        DB::table('products')->insert([
            'name' => 'Чизкейк',
            'amount' => 0,
            'image' => 'Чизкейк.jpg'
        ]);

        DB::table('products')->insert([
            'name' => 'Зефир',
            'amount' => 0,
            'image' => 'Зефир.jpg'
        ]);
    }
}
