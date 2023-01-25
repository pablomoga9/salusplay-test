import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Recipe from "./pages/Recipe";
import Category from "./pages/Category";
import DashboardCategories from "./pages/DashboardCategories";
import DashboardRecipes from "./pages/DashboardRecipes";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/recipe/:slug" element={<Recipe/>}/>
        <Route path="/category/:slug" element={<Category/>}/>
        <Route path="/admin/categories" element={<DashboardCategories/>}/>
        <Route path="/admin/recipes" element={<DashboardRecipes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
