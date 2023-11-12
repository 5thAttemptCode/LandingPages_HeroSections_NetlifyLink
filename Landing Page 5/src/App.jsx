import React from 'react'
import Nav from './components/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/index'
import About from './pages/about/index'
import Overlay from './components/overlay/Overlay'

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <Overlay /> */}
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </BrowserRouter>
  )
}
