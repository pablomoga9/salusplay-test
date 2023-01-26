<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class recipesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Recipe::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $file = $request->hasFile('file');
       
        if($file){
            $newFile = $request->file('file');
            $file_path = $newFile->store('images','public');
            
            $recipe = new Recipe();
            $recipe->title=$request->title;
            $recipe->image=$file_path;
            $recipe->preparation_time=$request->preparation_time;
            $recipe->servings=$request->servings;
            $recipe->ingredients=$request->ingredients;
            $recipe->procedure=$request->procedure;
            $recipe->slug=Str::slug($request->title,'-');
            $recipe->category_id=2;
            $recipe->visible=true;
            $recipe->save();
            echo asset('/storage/'. $file_path);
        }
           
            // Recipe::create([
            //     'title'=>$request->title,
            //     'image'=>'/storage'. $file_path,
            //     'preparation_time'=>$request->preparation_time,
            //     'servings'=>$request->servings,
            //     'ingredients'=>$request->ingredients,
            //     'procedure'=>$request->procedure,
            //     'slug'=>$request->slug,
            //     'visible'=>true
            // ]);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function show($slug)
    {
        
        
        
        $recipes = Recipe::where('slug',$slug)->first();
        return $recipes;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function edit(Recipe $recipe)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Recipe $recipe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Recipe  $recipe
     * @return \Illuminate\Http\Response
     */
    public function destroy(Recipe $recipe)
    {
        //
    }
}
