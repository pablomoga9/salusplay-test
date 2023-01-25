import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const callApi = async()=>{
      try{
        const res = await axios.get('http://localhost:8000/api/sayHello');
        console.log(res.data)
      }
      catch(error){
        console.log(error)
      }
    }
    callApi();
  })

  return (
    <div className="App">
    
    </div>
  )
}

export default App
