<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       

            return response()->json(Post::all(),200);
     

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $post=Post::create($request->all());
        return response()->json($post,201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $post=Post::findOrFail($id);
        return response()->json($post,201);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        $post=Post::findOrFial($id);
        $post->update($request->all());
        return response()->json($post,201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        Post::destroy($id);
        return response()->json(['message','deleted'],200);
    }
}
