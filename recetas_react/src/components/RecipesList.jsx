import React from 'react'
import { useEffect,useState } from 'react';
import EditForm from './EditForm';
import uuid4 from 'uuid4'
import styled from 'styled-components';

function RecipesList(props) {

    const [currentItems,setCurrentItems] = useState([]);

    const deleteRecipe = async(i)=>{
        try{
            
            const remaining = await props.data.filter((item,j)=>i!==j)
            
            console.log(remaining);
            setCurrentItems(remaining)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(!currentItems.length>0){
            setCurrentItems(props.data)
        }
    },[currentItems])


    return (
        <>
            <Container>
            {currentItems.length > 0 ? currentItems.map((item,i) => {
                return <div className='recipe' key={i}>
                    <div className='dashboardRecipe'>
                        <h3>{item.title}</h3>
                        {item.visible==false||0?<h4><b>Oculto</b></h4>:null}
                        <img src={item.image} alt="" height='40px' width='40px' />
                        <p>Tiempo de preparación: {item.preparation_time}</p>
                        <p>Número de raciones: {item.servings}</p>
                        <p>Ingredientes: {item.ingredients}</p>
                        <p>Procedimiento y pasos a seguir: {item.procedure}</p>
                    </div>
                    <EditForm data={item} remove={()=>deleteRecipe(i)}/>
                </div>
            }) : <p>Loading</p>}
            </Container>
        </>
    )
}


const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    width: 90%;
    margin-top: 70px;
    margin-right: 0px;
    gap: 10px;
    .recipe{
        display: flex;
        flex-direction: column;
        width: 20%;
        /* height: 700px; */
        background: #2a2a7832;
        border-radius: 10px;
    }
`

export default RecipesList