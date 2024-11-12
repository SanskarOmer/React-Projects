/* eslint-disable no-unused-vars */
 
import React, { useState } from 'react'

const App = () => {
    const [name, setName] = useState("Sanskar")
    const [num, setnum] = useState(1)
    const changeName = ()=>{
      setName("Aditi")
      setnum(num+1)
    }


  return (
    <div>
        <h1 className='text-teal-500'>Username is {name}</h1>
        <h1>Count is {num}</h1>
        <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default App