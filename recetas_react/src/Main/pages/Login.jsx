import React, { Component, useContext } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { adminContext } from '../../context/adminContext';

function Login() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const { admin, setAdmin } = useContext(adminContext);
  const navigate = useNavigate();

  const onSubmit = async (form) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/login`, form,{
        withCredentials: false,
    })
      
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <form data-aos="fade-left" data-aos-duration="2000" className="createForm" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="loginTitle">Login</h1>
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
    </>
  )
}

export default Login