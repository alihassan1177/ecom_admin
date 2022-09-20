<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\File;


class GalleryController extends Controller
{
    public function index()
    {
        return Gallery::all();
    }


    public function create(Request $request)
    {
        $info_validation = Validator::make($request->all(),[
            "image"=>["required", File::image()]
        ]);

        if ($info_validation->fails()) {
            return response()->json(["error" => $info_validation->errors()->all()]);
        }

        $img = $request->file("image");
        $img_path = $img->store("public/gallery");
        $img_url = str_replace("public/","", $img_path);

        $img = Gallery::create([
            "image" => $img_url,
        ]);

        return response()->json(["img"=> $img, "product_img" => URL("/storage/${img_url}"), "message"=>"Image uploaded Successfully"],200);
    }
    
    
    public function delete($id)
    {
        $image = Gallery::find($id);
        $image->delete();
        return response()->json(["message"=>"Image deleted Successfully"],200); 
    }

}
