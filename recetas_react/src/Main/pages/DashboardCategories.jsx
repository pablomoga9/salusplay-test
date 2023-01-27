import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { categoriesContext } from '../../context/categoriesContext';
import CategoriesList from '../../components/CategoriesList';

function DashboardCategories() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { categories, setCategories } = useContext(categoriesContext);

  const handleApi = async (form) => {
    try {
      const formData = {
        'title':form.title,
        'slug':"",
        'visible':true
      }
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/categories/create`,formData)
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/categories`)
        setCategories(res.data);
      }
      catch (error) {
        console.log(error)
      }
    }
    getAllCategories();
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(handleApi)}>
        <label>Título para la categoría:</label>
        <input type="text" {...register('title', { required: true,minLength:3})} />
        <input type='submit' value='Crear' />
      </form>
      {categories.length>0?<CategoriesList data={categories}/>:<h3>Loading...</h3>}
    </>
  )
}

export default DashboardCategories