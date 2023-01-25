<?php

namespace Database\Factories;

use App\Models\Recipe;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;
use App\Models\Category;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Recipe>
 */
class RecipeFactory extends Factory
{

    protected $model = Recipe::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'title' => $title=$this->faker->sentence(),
            'image'=> $this->faker->numberBetween(1,10),
            'preparation_time' => $this->faker->numberBetween(1,5),
            'servings' => $this->faker->numberBetween(1,5),
            'ingredients'=>$this->faker->paragraph(),
            'procedure' => $this->faker->paragraph(),
            'category_id'=> Category::inRandomOrder()->first()->id,
            'slug' =>Str::slug($title,'-'),
            'visible'=>$this->faker->boolean(true)
        ];
    }
}
