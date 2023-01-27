import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

function Category() {
  const [categoryDetail,setCategoryDetail] = useState({});
  const [recipesList,setRecipesList] = useState([])

  useEffect(()=>{
    const getDetail = async()=>{
      try{
        
        const getIt =  (window.location.pathname).substr(10);
        
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/categories/${getIt}`)
    
        setCategoryDetail(res.data);
        const res2 = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/recipes/list/${categoryDetail.id}`)
        const sortRecipes = await res2.data.sort(function(a,b){
            return new Date(b.created_at) - new Date(a.created_at);
        })
        setRecipesList(sortRecipes);
      }
      catch(error){
        console.log(error)
      }
    }
  
    getDetail();
  },[categoryDetail])

  return (
    <>
       <Container>
       {categoryDetail.title?<div>
          <h2>{categoryDetail.title}</h2>
        </div>:null}
        {recipesList.length>0?
        <div className='categoryDetail'>
          {recipesList.map((item,i)=>{
            return <div className='recipeCategory' key={i}>
              <Link to={`/recipe/${item.slug}`}>{item.title}</Link>
              <img src={item.image} height='100px' width='100px' alt="" />
            </div>
          })}
        </div>:null}
       </Container>
    </>
  )
}

const Container = styled.div`
  
  .categoryDetail{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin: auto;
    width: 90%;
  }

  .recipeCategory{
    display: flex;
    flex-direction: column;
    width: 20%;
    background: #2a2a7c2c;
    border-radius: 10px;
    align-items: center;
    padding: 30px;
    img{
      margin-top: 10px;
    }
  }
`

export default Category