<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BrandController extends Controller
{
    public function index(){
        $brand = Brand::all();
        return response()->json([
            'status'=>200,
            'brand'=>$brand,
        ]);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(),[

            'name_brand'=>'required|max:191',
            'desc_brand'=>'required|max:191',
        ]);

        if($validator ->fails()){
            return response()->json([

                'validate_err' => $validator->messages(),
            ]);
        }
        else{
            $brand = new Brand;
            $brand->name_brand = $request->input('name_brand');
            $brand->desc_brand = $request->input('desc_brand');
            $brand->save();
            return response()->json([
                'status'=> 200,
                'message'=>'Brand Added Successfully',
            ]);
        }
    }

    // xoá thương hiệu
    public function destroy($id){
        $brand = Brand::find($id);
        $brand->delete();
        return response()->json([
            'status'=>200,
            'message'=>'Brand deleted Successfully',
        ]);

    }

    //get dữ liệu về page edit brand
    public function edit($id){
        $brand = Brand::find($id);
        if($brand){
            return response()->json([
                'status'=>200,
                'brand'=>$brand,
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'No Brand ID Found',
            ]);

        }

    }

    //update thương hiệu
    public function update(Request $request ,$id){
        $validator = Validator::make($request->all(),[
            'name_brand'=>'required|max:191',
            'desc_brand'=>'required|max:191',
        ]);
        if($validator ->fails()){
            return response()->json([

                'validate_err' => $validator->messages(),
            ]);
        }
        else{
            $brand = Brand::find($id);
            if($brand)
            {
                $brand->name_brand = $request->input('name_brand');
                $brand->desc_brand = $request->input('desc_brand');
                $brand->update();
                return response()->json([
                    'status'=> 200,
                    'message'=>'Brand update Successfully',
                ]);
            }
            else
            {
                return response()->json([
                    'status'=> 404,
                    'message'=>'No Brand ID Found',
                ]);
            }

        }
    }

}
