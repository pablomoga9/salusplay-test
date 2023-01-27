import React,{useState,useEffect} from 'react'
import axios from "axios";
import {useForm} from 'react-hook-form';

function EditForm(props) {
    const {register,formState:{errors},handleSubmit} = useForm();
    const [openForm,setOpenForm] = useState("");
    const [categories, setCategories] = useState([]);

    const deleteRecipe = async()=>{
        try{
            const res = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admin/recipes/delete/${props.data.id}`,{
                withCredentials: false,
                headers: {"Access-Control-Allow-Origin": "*"}
            });
            props.remove();
        }
        catch(error){
            console.log(error)
        }
    }

    const openUpdate = async()=>{
        try{
          openForm==="open"?setOpenForm(""):setOpenForm("open");
        }
        catch(error){
          console.log(error);
        }
      }

    const onSubmit = async(form)=>{
        try{
            const applyForm = {
                "title":form.title!==""?form.title:props.data.title,
                "image":props.data.image,
                "preparation_time":form.preparation_time!==""||0?form.preparation_time:props.data.preparation_time,
                "servings":form.servings!==""||0?form.servings:props.data.servings,
                "ingredients":form.ingredients!==""?form.ingredients:props.data.ingredients,
                "procedure":form.procedure!==""?form.procedure:props.data.procedure,
                "category_id":props.data.category_id,
                "visible":form.visible===""?props.data.visible:form.visible==="true"?true:false,
                "slug":""
            }
            const res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/admin/recipes/${props.data.id}/update`,applyForm)
        }
        catch(error){
            console.log(error)
        }
    }

    function handleImage(e) {
        console.log(e.target.files);
        setImage(e.target.files[0])
      }


      useEffect(()=>{
        const getCategoriesSelector = async () => {
            try {
              const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/admin/categories/list`);
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
        <div className='editButtons'>
        <button onClick={deleteRecipe}>Borrar</button>
        <button onClick={openUpdate}>Editar</button>
        </div>
       {openForm==="open"?<div>
       <form onSubmit={handleSubmit(onSubmit)}>
        <label>Selecciona una imagen de tu equipo para la receta:</label>
        <input type="file" name='file' onChange={handleImage} />
        <label>Título para la receta:</label>
        <input type="text" {...register('title', )} />
        <label>Tiempo de preparación: </label>
        <input type="number" {...register('preparation_time')} />
        <label>Número de raciones</label>
        <input type="number" {...register('servings',)} />
        <label>Lista de ingredientes:</label>
        <textarea rows='5' cols='30'{...register('ingredients')} />
        <label>Procedimiento:</label>
        <textarea name="" cols="30" rows="10" {...register('procedure')}></textarea>
        <label>Selecciona una categoría:</label>
        <select name="select" {...register('select')}>
          {categories.length > 0 ? categories.map((item, index) => {
            return <option key={index} value={item.id}>{item.title}</option>
          }) : null}
        </select>
          <label>¿Quieres ocultar esta receta?</label>
          <select name="visible" {...register('visible')}>
            <option value="">Selecciona una opción</option>
            <option value="true">Habilitar</option>
            <option value="false">Ocultar</option>
          </select>
        <input type='submit' value='Actualizar' />
      </form>
        </div>:null} 
    </>
  )
}

export default EditForm