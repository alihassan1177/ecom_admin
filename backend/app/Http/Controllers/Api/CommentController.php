<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comment.php;


class CommentController extends Controller
{
	public function index(){
		return Comment::all();
	}
}
