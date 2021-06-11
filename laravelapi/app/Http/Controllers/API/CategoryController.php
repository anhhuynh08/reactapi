<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{
    public function index(){
        $cate = Category::all();
        return response()->json([
            'status' => 200,
            'category'=> $cate
        ]);
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(),[

            'name_cate'=>'required|max:191',
            'desc_cate'=>'required|max:191',
        ]);

        if($validator ->fails()){
            return response()->json([

                'validate_err' => $validator->messages(),
            ]);
        }
        else
        {
            $cate = new Category;
            $cate->name_cate = $request->input('name_cate');
            $cate->desc_cate = $request->input('desc_cate');
            $cate->save();
            return response()->json([
                'status'=> 200,
                'message'=>'Category Added Successfully',
            ]);
        }


    }
    //get dữ liệu về page edit cate
    public function edit($id){
        $cate = Category::find($id);
        if($cate){
            return response()->json([
                'status'=>200,
                'cate'=>$cate,
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message'=>'No cate ID Found',
            ]);

        }

    }

    //update danh muc
    public function update(Request $request ,$id){
        $validator = Validator::make($request->all(),[

            'name_cate'=>'required|max:191',
            'desc_cate'=>'required|max:191',
        ]);
        if($validator ->fails()){
            return response()->json([

                'validate_err' => $validator->messages(),
            ]);
        }
        else{
            $cate = Category::find($id);
            if($cate)
            {
                $cate->name_cate = $request->input('name_cate');
                $cate->desc_cate = $request->input('desc_cate');
                $cate->update();
                return response()->json([
                    'status'=> 200,
                    'message'=>'cate update Successfully',
                ]);
            }
            else
            {
                return response()->json([
                    'status'=> 404,
                    'message'=>'No cate ID Found',
                ]);
            }

        }
    }
    public function destroy($id){
        $cate = Category::find($id);
        $cate->delete();
        return response()->json([
            'status'=>200,
            'message'=>'Category deleted successfully'
        ]);

    }
}
