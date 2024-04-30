import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from '@/pages/about/index'
import Home from '@/pages/home/index'
import Nav from '@/components/nav'
import Overlay from '@/components/overlay/index'
import LoadingScreen from './components/loadingScreen'


export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Overlay />
      <LoadingScreen />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
    </BrowserRouter>
  )
}
