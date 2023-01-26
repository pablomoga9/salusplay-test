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
            'image'=> $this->faker->randomElement(['http://localhost:8000/storage/images/wtZJsMSpDk5nwHUwwPN9ghMukIxnUto20heITTi9.jpg','http://localhost:8000/storage/images/fUexMhC2UbKJHtjBbfQI5NFy7gdGB8QbmQMY7GgM.jpg','http://localhost:8000/storage/images/HRqtHuRg1BKdiq5hkB0aEDfFLmoyvyMJRJTO1tIA.jpg','http://localhost:8000/storage/images/4DhBfTpnZTmBu4LvCaPEYfXD6RWWMwJ0plJmzjHA.jpg','http://localhost:8000/storage/images/IRgT4P3CIEEMqpwjIR0Of1ft1qY79yhMDeSTQgK1.jpg','http://localhost:8000/storage/images/78atZIMxkt0xF5uuGRRwLA6NpA5gOYBXzUOtpuAF.jpg','http://localhost:8000/storage/images/8zw0OIQr6jTh0v8jogfdsTuf07PvOmPplSSuohoc.jpg','http://localhost:8000/storage/images/TJzBVeCNLbH2NwAk6lw0EQQSy9C3CJN2WNT3XI0r.jpg','http://localhost:8000/storage/images/bdPKllhoH05pE3IY0XnbfDoALsxHM7gOazQQ6MxP.jpg','http://localhost:8000/storage/images/uAYzcxc77ygemO7KhXKefQ2QWA5eEUTXL8bNnvZE.jpg']),
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
