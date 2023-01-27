<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class recipesController extends Controller
{
   
    public function index()
    {
        return Recipe::all();
    }

    
    public function create()
    {
        
    }

    public function store(Request $request)
    {   
        $file = $request->hasFile('file');
       
        if($file){
            $newFile = $request->file('file');
            $file_path = $newFile->store('images','public');
            
            $recipe = new Recipe();
            $recipe->title=$request->title;
            $recipe->image=asset('/storage/'. $file_path);
            $recipe->preparation_time=$request->preparation_time;
            $recipe->servings=$request->servings;
            $recipe->ingredients=$request->ingredients;
            $recipe->procedure=$request->procedure;
            $recipe->slug=Str::slug($request->title,'-');
            $recipe->category_id=$request->category_id;
            $recipe->visible=true;
            $recipe->save();
           
        }
        
    }

    
    public function show($slug)
    {
        $recipes = Recipe::where('slug',$slug)->first();
        return $recipes;
    }

   
    public function edit(Recipe $id)
    {
        return $id;
    }

   
    public function update(Request $request, Recipe $id)
    {
        $file = $request->hasFile('file');
       

        $id->title=$request->title;
        if($file){
            $newFile = $request->file('file');
            $file_path = $newFile->store('images','public');
            $id->image=asset('/storage/'. $file_path);
        }
        $id->preparation_time=$request->preparation_time;
        $id->servings=$request->servings;
        $id->ingredients=$request->ingredients;
        $id->procedure=$request->procedure;
        $id->category_id=$request->category_id;
        $id->slug=Str::slug($request->title,'-');
        $id->visible=$request->visible;
        $id->update();
    }

   
    public function destroy($id)
    {
        $recipes = Recipe::where('id',$id)->first();
        $recipes->delete();

    }
}
