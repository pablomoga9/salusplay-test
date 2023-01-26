<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class categoriesController extends Controller
{

    public function index()
    {
        return Category::all();
    }

  
    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        if($request->title){
            
            $category = new Category();
            $category->title=$request->title;
            $category->slug=Str::slug($request->title,'-');
            $category->visible=true;
            $category->save();
        } 
    }

    
    public function show($slug)
    {
        $categories = Category::where('slug',$slug)->first();
        return $categories;
    }


    public function categoryList()
    {
        $categories = Category::get();
        $subset = $categories->map(function($category){
            return $category->only(['id','title']);
        });
        echo $subset;
    }

   
    public function edit(Category $id)
    {
    return $id;
    }

   
   
    
    public function update(Request $request, Category $id)
    {
        $id->title = $request->title;
        $id->slug = Str::slug($request->title,'-');
        $id->visible=$request->visible;
        $id->update();
    }

   
    public function destroy($id)
    {
        $categories = Category::where('id',$id)->first();
        $categories->delete();
    }
}
