import React from 'react';
import { useEffect } from "react"

import { useState } from "react"
import './App.css'
function App() {
 let[a, seta]=useState(false)
// let[count, setCount]=useState(0)

    useEffect(()=>{
        setTimeout(()=>{
            seta(true)
            if(a == true){
              seta(false)
            }
        
        }, 1000)
    },[a])

  return (
  <div className={a && 'red'|| 'green'}>

  </div>
  );
}

export default App;
