<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class CategoryFactory extends Factory
{

    protected $model = Category::class;

  
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title'=> $title=$this->faker->unique()->randomElement(['Aperitivos','Ensaladas','Guarniciones','Veganas','Pescado y marisco','Carnes y aves','Pasta','Arroz','Postres','Desayuno']),
            'slug'=>Str::slug($title,'-'),
            'visible'=>$this->faker->boolean(true)
        ];
    }
}
