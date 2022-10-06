import React from 'react'
import { useState } from 'react'

function Test() {

    const [name, setName] = useState('');
  
    const handleForm = () => {
        console.log(name);
    }

  return (
   <form >
    <label>name</label>
    <input type="text" onChange={(e)=>setName(e.target.value)}  />
    <button type='submit' onClick={handleForm}>Click</button>
   </form>
  )
}

export default Test;