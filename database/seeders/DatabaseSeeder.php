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
            'login' => Str::random(10),
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
        ]);

        DB::table('users')->insert([
            'login' => Str::random(10),
            'email' => Str::random(10).'@gmail.com',
            'password' => Hash::make('password'),
        ]);

        DB::table('products')->insert([
            'name' => 'Tasty Candy',
            'amount' => 100,
            'image' => 'tasty_candy.png'
        ]);

        DB::table('products')->insert([
            'name' => 'Not Tasty Candy',
            'amount' => 0,
            'image' => 'not_tasty_candy.png'
        ]);
    }
}
