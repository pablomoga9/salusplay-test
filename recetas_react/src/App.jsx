import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Main from './Main/Main';
import { useState } from 'react';
import { recipesContext } from './context/recipesContext.js'
import { BrowserRouter } from 'react-router-dom';
import {categoriesContext} from './context/categoriesContext.js';
import './App.css'

const App = () => {
  const [recipes,setRecipes] = useState([]);
  const [categories,setCategories] = useState([]);

  return (
    <div className='App'>
      <BrowserRouter>
        <recipesContext.Provider value={{recipes,setRecipes}}>
        <categoriesContext.Provider value={{categories,setCategories}}>
          <Header />
          <Main />
        </categoriesContext.Provider>
        </recipesContext.Provider>
      </BrowserRouter>
    </div>
  )
}

export default App;