import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='px-7 py-10 bg-blue-600 text-white flex items-center justify-between '>
        <h2 className='text-2xl'>Sanskar-s Page <input type="text" className='text-gray-700'/></h2>
        <div className='flex gap-10 text-2xl underline '>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Products</Link>
            <Link to='/contact'>Contact</Link>
          </div>  
    </div>
  )
}

export default Header