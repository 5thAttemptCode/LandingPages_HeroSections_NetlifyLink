import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import ProductPage from './ProductPage'
import ProductSlider from './ProductSlider'
import Nav from './Nav'


export default function App() {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productpage/:productId" element={<ProductPage />} />
      </Routes>
      <ProductSlider />
    </BrowserRouter>
  )
}

