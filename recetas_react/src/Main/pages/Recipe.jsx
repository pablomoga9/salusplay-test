import axios from 'axios'
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

function Recipe() {

  const [recipeDetail,setRecipeDetail] = useState({});

  useEffect(()=>{
    const getDetail = async()=>{
      try{
        const getIt =  (window.location.pathname).substr(8);
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/recipes/${getIt}`);
        setRecipeDetail(res.data)
      }
      catch(error){
        console.log(error)
      }
    }

    getDetail();
  },[])

  return (
    <>
      <Container>
      <Link to="/">Volver</Link>
      {recipeDetail.title?<div className='recipeDetail'>
        <h2>{recipeDetail.title}</h2>
        <img src={recipeDetail.image}/>
        <p>Tiempo de preparación: {recipeDetail.preparation_time}</p>
        <p>Raciones: {recipeDetail.servings}</p>
        <p>Ingredients: {recipeDetail.ingredinets}</p>
        <p>Procedimiento:{recipeDetail.procedure}</p>
      </div>:null}
      </Container>
    </>
  )
}

const Container = styled.div`
  .recipeDetail{
    background: #2a2a7c2c;
    border-radius: 10px;
    width: 90%;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  img{
    width: 50%;
    border-radius: 50px;
  }
`

export default Recipe