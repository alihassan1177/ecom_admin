<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Blog;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\File;


class BlogController extends Controller
{
    public function index()
    {
        return Blog::all();
    }

    public function create(Request $request)
    {
        $info_validation = Validator::make($request->all(),[
            "title" => "required",
            "body" => "required",
            "featured_img"=>["required", File::image()]
        ]);

        if ($info_validation->fails()) {
            return response()->json(["error" => $info_validation->errors()->all()]);
        }

        $img = $request->file("featured_img");
        $img_path = $img->store("public/gallery");
        $img_url = str_replace("public/","", $img_path);

        $post = Blog::create([
            "title"=>$request->input("title"),
            "body"=>$request->input("body"),
            "featured_img"=>$request->input("featured_img"),
        ]);

        return response()->json(["post"=> $post, "post_img" => URL("/storage/${img_url}"), "message"=>"Post Created Successfully"],200);

    }

    public function update($id, Request $request)
    {

        $info_validation = Validator::make($request->all(),[
            "title" => "required",
            "body" => "required",
            "featured_img"=>["required", File::image()]
        ]);

        if ($info_validation->fails()) {
            return response()->json(["error" => $info_validation->errors()->all()]);
        }

        $img = $request->file("product_img");
        $img_path = $img->store("public/gallery");
        $img_url = str_replace("public/","", $img_path);

        $post = Blog::find($id);
        $post->title = $request->input("title");
        $post->body = $request->input("body");
        $post->featured_img = $img_url;
        $post->save();

        return response()->json(["product"=> $post, "product_img" => URL("/storage/${img_url}"), "message"=>"Post Updated Successfully"],200);
    }

    public function delete($id)
    {
        $post = Blog::find($id);
        $post->delete();
        return response()->json(['message'=>'Post deleted Successfully'], 200);
    }
}
