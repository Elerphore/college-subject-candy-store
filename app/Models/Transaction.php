<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    public $timestamps = false;

    /**
     * @var mixed
     */
    protected $fillable = [
        'user_id',
        'product_id',
        'status',
        'created_at'
    ];
}
