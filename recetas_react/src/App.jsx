import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header';
import Main from './Main/Main';
import { useState } from 'react';
import { recipesContext } from './context/recipesContext.js'
import { BrowserRouter } from 'react-router-dom';
import {categoriesContext} from './context/categoriesContext.js';
import { adminContext } from './context/adminContext';
import './App.css'
import styled from 'styled-components';

const App = () => {
  const [recipes,setRecipes] = useState([]);
  const [categories,setCategories] = useState([]);
  const [admin,setAdmin] = useState("");

  return (
    <div className='App'>
      <BrowserRouter>
        <adminContext.Provider value={{admin,setAdmin}}>
        <recipesContext.Provider value={{recipes,setRecipes}}>
        <categoriesContext.Provider value={{categories,setCategories}}>
         <Container>
         <Header />
          <Main />
         </Container>
        </categoriesContext.Provider>
        </recipesContext.Provider>
        </adminContext.Provider>
      </BrowserRouter>
    </div>
  )
}

const Container = styled.div`
  background: #7f9bbf;
  background: linear-gradient(191deg, #5c85a1 0%, #5c9aca7a 52%, #5db0f8 100%);
`

export default App;