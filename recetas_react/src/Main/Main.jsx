import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './App.css';
import Login from "./pages/Login";
import Recipe from "./pages/Recipe";
import Category from "./pages/Category";
import DashboardCategories from "./pages/DashboardCategories";
import DashboardRecipes from "./pages/DashboardRecipes";
import Home from './pages/Home';
import styled from 'styled-components';

function Main() {
  return (
  
    
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/recipe/:slug" element={<Recipe/>}/>
        <Route path="/category/:slug" element={<Category/>}/>
        <Route path="/admin/categories" element={<DashboardCategories/>}/>
        <Route path="/admin/recipes" element={<DashboardRecipes/>}/>
      </Routes>
     
    
  )
}



export default Main
