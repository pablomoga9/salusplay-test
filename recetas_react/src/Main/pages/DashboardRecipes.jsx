import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import slugify from 'react-slugify';
import { Link } from 'react-router-dom';
import RecipesList from '../../components/RecipesList';
import styled from 'styled-components';
import { adminContext } from '../../context/adminContext';
import { useNavigate } from 'react-router-dom';

function DashboardRecipes() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [imgRender, setImgRender] = useState('');
  const [categories, setCategories] = useState([]);
  const {admin,setAdmin} = useContext(adminContext);
  const navigate = useNavigate();


  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0])
  }
  const handleApi = async (form) => {
    console.log(form);
    const formData = new FormData();
    formData.append('file', image);
    formData.append('title', form.title)
    formData.append('preparation_time', form.preparation_time)
    formData.append('servings', form.servings)
    formData.append('ingredients', form.ingredients)
    formData.append('procedure', form.procedure)
    formData.append('category_id', form.select)
    formData.append('slug', slugify(form.title))

    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/admin/recipes/create`, formData);
    setImgRender(res.data);
  }

  useEffect(() => {

  }, [imgRender])

  useEffect(() => {
    if(admin===""){
      navigate('/login')
    }

    const getAllRecipes = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/recipes`);
        setRecipes(res.data);
      }
      catch (error) {
        console.log(error);
      }
    }
    getAllRecipes()
    const getCategoriesSelector = async () => {//Obtener la lista de categorías existentes para poder desplegarlas en el selector de "Categoría" para la creación de receta
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/categories/list`);
        setCategories(res.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    getCategoriesSelector();
  }, [])

  return (
    <>
      <Container>
      <form onSubmit={handleSubmit(handleApi)}>
        <label>Selecciona una imagen de tu equipo para la receta:</label>
        <input type="file" name='file' onChange={handleImage} />
        <label>Título para la receta:</label>
        <input type="text" {...register('title', { required: true })} />
        <label>Tiempo de preparación: </label>
        <input type="number" {...register('preparation_time', { required: true })} />
        <label>Número de raciones</label>
        <input type="number" {...register('servings', { required: true })} />
        <label>Lista de ingredientes:</label>
        <textarea rows='5' cols='30'{...register('ingredients', { required: true })} />
        <label>Procedimiento:</label>
        <textarea name="" cols="30" rows="10" {...register('procedure', { required: true })}></textarea>
        <label>Selecciona una categoría:</label>
        <select name="select" {...register('select')}>
          {categories.length > 0 ? categories.map((item, index) => {
            return <option key={index} value={item.id}>{item.title}</option>//tomamos como valor el id de la categoría y como representación el título
          }) : null}
        </select>

        <input type='submit' value='Crear' />
      </form>
      
        {recipes.length > 0 ?
          <RecipesList data={recipes} />
          : <h3>Loading...</h3>}
      
      <img src={imgRender} alt="" />
      </Container>
    </>
  )
}

const Container = styled.div`
  
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  height: 100vh;
  background-color: #B2464F;
  background-size: 20px 20px;
  animation: progress-bar-stripes 500ms linear infinite;


@keyframes progress-bar-stripes {
  0% {
    background-position: 40px 0;
  }
  100% {
    background-position: 0 0;
  }}
`

export default DashboardRecipes