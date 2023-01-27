import axios from 'axios';
import React,{useState,useEffect,useContext} from 'react';
import { categoriesContext } from '../../context/categoriesContext';
import RecipesByCategories from '../../components/RecipesByCategories';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Home() {
  const {categories,setCategories} = useContext(categoriesContext);

  useEffect(()=>{
    const getCategories = async()=>{
      try{
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/categories`);
        const sortCategories = res.data.sort(function(a,b){
          if(a.title<b.title){return -1};
          if(a.title>b.title){return 1};
          return 0
        })
        setCategories(sortCategories);
      } 
      catch(error){
        console.log(error)
      }
    }
    getCategories();
  },[])


  

  return (
    <>
          <Container>
          {categories.length>0?categories.map((item,i)=>{
        return <div key={i}>
          <Link to={`/category/${item.slug}`}><h3>{item.title}</h3></Link>
          <RecipesByCategories data={item.id}/>
        </div>
      }):null}
          </Container>
    </>
  )
}

const Container = styled.div`
  h3{
    padding: 10px;
    background: #3025a886;
    width: 20%;
    margin: auto;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-top: 40px;
    color: #bcbcbc;
  }
`

export default Home