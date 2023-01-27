import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import "swiper/css/free-mode";
import { Link } from 'react-router-dom';
function RecipesByCategories(props) {
    const [recipesLsit, setRecipesList] = useState([]);
    
      
    useEffect(() => {
        const getRecipes = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/recipes/list/${props.data}`)
                const sortRecipes = await res.data.sort(function(a,b){
                    return new Date(b.created_at) - new Date(a.created_at);
                })
                setRecipesList(sortRecipes);
            }
            catch (error) {
                console.log(error)
            }
        }
        getRecipes();
    }, [])
    return (
        <>
            <Container>
                <div className='carousel'>
                <Swiper freeMode={true}
          grabCursor={false}
          modules={[FreeMode]}
          className='homeDirectory'
          slidesPerView={4}
          spaceBetween={10}>
            {recipesLsit.length>0?recipesLsit.map((item,i)=>{
                    return <SwiperSlide className='listItem' key={i}>
                        
                        <img src={item.image} width="200px" height="165px" alt="" />
                        <h4>{item.title}</h4>
                    </SwiperSlide>
                }):null}
          </Swiper>
                
                </div>
                
            
            </Container>
        </>
    )
}

const Container = styled.div`
  .listItem{
    width: 20%;
    background: #2a2a7c2c;
    border-radius: 10px;
    margin-bottom: 85px;
  }
`


export default RecipesByCategories