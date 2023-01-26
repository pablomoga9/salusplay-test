import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import slugify from 'react-slugify';

function DashboardRecipes() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState('');
  const [recipes,setRecipes] = useState([]);
  const [imgRender, setImgRender] = useState('');
  const [categories, setCategories] = useState([]);

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
    formData.append('slug',slugify(form.title) )

    const res = await axios.post('http://localhost:8000/api/recipes/create', formData);
    setImgRender(res.data);
    console.log(res.data)
  }

  useEffect(() => {

  }, [imgRender])

  useEffect(() => {
    const getAllRecipes = async()=>{
      try{  
        const res = await axios.get('http://localhost:8000/api/recipes');
        setRecipes(res.data);
      }
      catch(error){
        console.log(error);
      }
    }
    getAllRecipes()
    const getCategoriesSelector = async () => {//Obtener la lista de categorías existentes para poder desplegarlas en el selector de "Categoría" para la creación de receta
      try {
        const res = await axios.get('http://localhost:8000/api/categories/list');
        setCategories(res.data)
      }
      catch (error) {
        console.log(error);
      }
    }
    getCategoriesSelector();
  },[])

  return (
    <>
      <form onSubmit={handleSubmit(handleApi)}>
        <label htmlFor="">Selecciona una imagen de tu equipo para la receta:</label>
        <input type="file" name='file' onChange={handleImage} />
        <label htmlFor="">Título para la receta:</label>
        <input type="text" {...register('title',{required:true})}/>
        <label htmlFor="">Tiempo de preparación: </label>
        <input type="number" {...register('preparation_time',{required:true})} />
        <label htmlFor="">Número de raciones</label>
        <input type="number" {...register('servings',{required:true})}/>
        <label htmlFor="">Lista de ingredientes:</label>
        <textarea rows='5' cols='30'{...register('ingredients',{required:true})} />
        <label htmlFor="">Procedimiento:</label>
        <textarea name="" cols="30" rows="10" {...register('procedure',{required:true})}></textarea>
        <label htmlFor="">Selecciona una categoría:</label>
        <select name="select" {...register('select')}>
          {categories.length > 0 ? categories.map((item, index) => {
            return <option key={index} value={item.id}>{item.title}</option>//tomamos como valor el id de la categoría y como representación el título
          }) : null}
        </select>

        <input type='submit' value='Crear'/>
      </form>
      <div className='dashboardList'>
          {recipes.length>0?recipes.map((item,index)=>{
            return <div key={index}>
              {console.log(item)}
            </div>
          }):<h3>Loading...</h3>}
      </div>
      <img src={imgRender} alt="" />
    </>
  )
}

export default DashboardRecipes