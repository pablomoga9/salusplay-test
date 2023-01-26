import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

function DashboardRecipes() {
  const [image,setImage] = useState('');
  const [imgRender,setImgRender] = useState('');
  
  function handleImage(e){
    console.log(e.target.files);
    setImage(e.target.files[0])
  }
const handleApi = async()=>{
    const formData = new FormData();
    formData.append('file',image);
    formData.append('title','Juldio')
    formData.append('preparation_time',3)
    formData.append('servings',2)
    formData.append('ingredients','fweeeeeeeeeeeeeeeeeeeeeeeeeeee')
    formData.append('procedure','fwepojfpweojfpowejfpowjefopwjepofjwpeo')
    formData.append('slug','wefwdef')
    
    const res = await axios.post('http://localhost:8000/api/recipes/create',formData);
    await setImgRender(res.data);
    console.log(res.data)
  }
  
  useEffect(()=>{

  },[imgRender])

  return (
    <div>
      <input type="file" name='file' onChange={handleImage}/>
      <button onClick={handleApi}>Submit</button>
      <img src={imgRender} alt="" />
    </div>
  )
}

export default DashboardRecipes