import React ,{useContext, useEffect} from 'react';
import { adminContext } from '../context/adminContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Header() {
  const {admin,setAdmin} = useContext(adminContext);

  useEffect(()=>{
  
  },[window.location.pathname])

  return (
    <>
      <Container>
      
      <header>
        <Link to="/"><h1>Recetas</h1></Link>
        {admin!==""||window.location.pathname==="/login"?<div className='adminHeader'>
          <Link to="/admin/recipes">Dashboard Recetas</Link>
          <Link to="/admin/categories">Dashboard Categorías</Link>
          </div>:<Link className='loginBtn' to="/login">Inicio sesión</Link>}  
      </header>
      </Container>
    </>
  )
}


const Container = styled.div`
  header{
    display: flex;
    align-items: center;
    h1{
      margin-left: 20px;
    }
    justify-content: space-between;
    .adminHeader{
      a{
        margin:20px;
      }
      margin-right: 30px;
    }

    .loginBtn{
      margin-right: 40px;
      background: #1818b262;
      padding: 10px;
      color: white;
      border-radius: 20px;
    }
  }
`

export default Header