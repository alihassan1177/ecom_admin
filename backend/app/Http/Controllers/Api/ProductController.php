<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\File;

class ProductController extends Controller
{
    public function index()
    {
        return Product::all();
    }

    public function create(Request $request)
    {
        $info_validation = Validator::make($request->all(),[
            "product_name" => "required",
            "product_desc" => "required",
            "product_code" => "required",
            "product_cat" => "required",
            "product_img"=>["required", File::image()]
        ]);

        if ($info_validation->fails()) {
            return response()->json(["error" => $info_validation->errors()->all()]);
        }

        $img = $request->file("product_img");
        $img_path = $img->store("public/products");
        $img_url = str_replace("public/","", $img_path);

        $product = Product::create([
            "product_name" => $request->input("product_name"),
            "product_img" => $img_url,
            "product_code" => $request->input("product_code"),
            "product_desc" => $request->input("product_desc"),
            "product_cat" => $request->input("product_cat"),
        ]);

        return response()->json(["product"=> $product, "product_img" => URL("/storage/${img_url}"), "message"=>"Product Created Successfully"],200);

    }

    public function delete($id)
    {
        $product = Product::find($id);
        $product->delete();
        return response(["message"=> "Product deleted Successfully"], 200);
    }

    public function update($id, Request $request)
    {

        $info_validation = Validator::make($request->all(),[
            "product_name" => "required",
            "product_desc" => "required",
            "product_code" => "required",
            "product_cat" => "required",
            "product_img"=>["required", File::image()]
        ]);

        if ($info_validation->fails()) {
            return response()->json(["error" => $info_validation->errors()->all()]);
        }

        $img = $request->file("product_img");
        $img_path = $img->store("public/products");
        $img_url = str_replace("public/","", $img_path);

        $product = Product::find($id);
        $product->product_name = $request->input("product_name");
        $product->product_code = $request->input("product_code");
        $product->product_desc = $request->input("product_desc");
        $product->product_cat = $request->input("product_cat");
        $product->product_img = $img_url;
        $product->save();

        return response()->json(["product"=> $product, "product_img" => URL("/storage/${img_url}"), "message"=>"Product Created Successfully"],200);
    }
}
