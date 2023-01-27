import React, { Component, useContext,useEffect,useState } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { adminContext } from '../../context/adminContext';
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
  
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { admin, setAdmin } = useContext(adminContext);
  const navigate = useNavigate();
  const [showError,setShowError] = useState(false);


  useEffect(()=>{
    if(admin!==""){
      navigate('/admin/recipes')
    }
  },[])

  const onSubmit = async (form) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, form,{
        withCredentials: false,
    })
      if(res.data.accessToken){
        setAdmin("Admin")
        navigate("/admin/recipes")
      }
      
    }
    catch (error) {
      setShowError(true);
    }
  }


  useEffect(()=>{

  },[showError])
  return (
    <>
      <Container>
      <Link to="/" className="goBack">Volver a Inicio</Link>
      <h1 className="loginTitle">Login</h1>
      <form className="createForm" onSubmit={handleSubmit(onSubmit)}>
        
        <label htmlFor="">Usuario:</label>
        <input type="text" {
          ...register('name', {
            required: true,
            minLength: 3
          })} />{errors.email?.type === 'required' && <p>El campo 'Usuario' es requerido</p>}
        <label htmlFor="">Contraseña: </label>
        <input type="password" {
          ...register('password', {
            required: true,
            minLength: 3
          })} />{errors.email?.type === 'required' && <p>El campo 'Contraseña' es requerido</p>}
        <input className="sendCreate" type="submit" value="Login" />
      </form>
      {showError==true?<p>El usuario o la contraseña son incorrectos</p>:null}
      
      </Container>
    </>
  )
}


  const Container = styled.div`

     body{
      min-height: 400vh;
     }
    form{
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 40%;
      margin: auto;
      gap: 30px;
      input{
        padding: 10px;
        border-radius: 20px;
        border: none;
      }
      .sendCreate{
        margin-bottom: 400px;
        cursor: pointer;
        margin-top: 20px;
        background: #5f76b5;
        border-radius: 10px;
      }
    }

    .goBack{
      text-align: start;
    }
  `

export default Login