import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/product'
import Header from './components/Header'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={ <Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/product' element={<Product />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App