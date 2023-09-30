import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/landingPage/Home'
import ProductPage from './components/productPage/ProductPage'
import ProductSlider from './components/productSlider/ProductSlider'
import Nav from './components/nav/Nav'


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

