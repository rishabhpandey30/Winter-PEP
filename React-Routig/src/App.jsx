import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import LandingPage from './components/LandingPage'
import Unknown from './components/Unknown'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

function App() {

  return (
    <>
    <div>
    <Nav />
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/productList' element={<ProductList />} />
      <Route path='/productDetail/:id' element={<ProductDetail />} />
      <Route path="/home" element ={<Home />} />
      <Route path="/about" element ={<About />} />
      <Route path="/contact" element ={<Contact />} />

      <Route path='*' element={<Unknown />} />    {/*For the unknown link it comes last at routes */}
    </Routes>
    </div>
    </>
  )
}

export default App
