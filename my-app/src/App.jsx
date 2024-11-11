/* eslint-disable no-unused-vars */

import React from 'react'

const App = () => {
    let user ="Sanskar"
    const name = ()=>{
        console.log(user)
        user="Aditi"
        console.log(user)
    }

  return (
    <div>
        <h1>Username is {user}</h1>
        <button onClick={name}>Change Name</button>
    </div>
  )
}

export default App