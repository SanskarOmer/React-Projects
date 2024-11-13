import React from 'react'
import { useState } from 'react'

const App = () => {

  const [username, setusername] = useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(username)
    setusername('')

  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" value={username} onChange={(e)=>{
          setusername(e.target.value)
        }} placeholder='Enter your name' className='px-4 py-4 rounded text-xl  m-5' />
        <button className='px-4 py-4 rounded text-white font-semibold bg-emerald-500 '>Submit</button>
      </form>
    </div>
  )
}

export default App 