import React,{useState,useEffect,useContext} from 'react'
import axios from "axios";
import {useForm} from 'react-hook-form';
import { categoriesContext } from '../context/categoriesContext';



function EditFormCategory(props) {
    const {register,formState:{errors},handleSubmit} = useForm();
    const [openForm,setOpenForm] = useState("");
    const {categories,setCategories} = useContext(categoriesContext);


    const deleteCategory = async()=>{
        try{
          const res = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/admin/categories/delete/${props.data.id}`,{
            withCredentials: false,
            headers: {"Access-Control-Allow-Origin": "*"}
        });
          props.remove();
        }
        catch(error){
          console.log(error);
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
            const applyForm ={
                "title":form.title!==""?form.title:props.data.title,
                "visible":form.visible===""?props.data.visible:form.visible==="true"?true:false,
                "slug":""
            } 
            const res = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/admin/categories/${props.data.id}/update`,applyForm)
        }
        catch(error){
            console.log(error)
        }
      }
  return (
    <>
        <div className='editButtons'>
        <button onClick={deleteCategory}>Borrar</button>
        <button onClick={openUpdate}>Editar</button>
        </div>
        {openForm==="open"?<div>
       <form onSubmit={handleSubmit(onSubmit)}>
        <label>Título para la categoría:</label>
        <input type="text" {...register('title', )} />
        <label>¿Quieres ocultar esta categoría?</label>
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

export default EditFormCategory