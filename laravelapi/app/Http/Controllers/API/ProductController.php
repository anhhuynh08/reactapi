<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = Category::all();
        $product = Product::all();
        return response()->json([
            'status'=>200,
            'product'=>$product,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[

            'name_product'=>'required|max:191',
            'desc_product'=>'required|max:191',
            'brand_id'=>'required',
            'category_id'=>'required',
            'img_product'=> 'required|max:2048',
            'price_product'=>'required|max:191',
        ]);

        if($validator ->fails()){
            return response()->json([

                'validate_err' => $validator->messages(),
            ]);
        }
        else
        {
            $product = new Product;
            $product->name_product = $request->input('name_product');
            $product->brand_id = $request->input('brand_id');
            $product->category_id = $request->input('category_id');
            $product->price_product = $request->input('price_product');
            //thêm ảnh vào folder
            // $get_image = $request->input('img_product');
            // $path ='public/uploads/product/';
            // $get_name_image = $get_image->getClientOriginalName();
            // $name_image = current(explode('.',$get_name_image));
            // $new_image = $name_image.rand(0,99).'.'.$get_image->getClientOriginalExtension();
            // $get_image->move($path,$new_image);
            // $product->img_product = $new_image;
            $product->img_product = $request->input('img_product');
            $product->desc_product = $request->input('desc_product');
            $product->save();
            return response()->json([
                'status'=>200,
                'message'=>'Product added successfully',
            ]);
        }

    }
    public function add_product()
    {
        $category = Category::all();
        $brand = Brand::all();
        return response()->json([
            'status'=>250,
            'category'=>$category,
            'brand'=>$brand,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
        return response()->json([
            'status'=> 200,
            'message'=>'Product delete success',
        ]);
    }
}
