<?php

namespace Database\Seeders;

use App\Models\Recipe;
use App\Models\Category;
use Illuminate\Database\Seeder;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory()->create();
        Category::factory(10)->create();
        Recipe::factory(120)->create();
       
    }
}
