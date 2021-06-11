<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table ='product';
    protected $fillable =[
        'name_product',
        'brand_id',
        'category_id',
        'desc_product',
        'price_product',

    ];
}
