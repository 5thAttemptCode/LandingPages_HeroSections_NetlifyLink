import React from 'react'
import { useLocation } from 'react-router-dom'


export default function ProductPage() {

  const location = useLocation()
  const smoothy = location.state.smoothy

  return (
    <div className='product-page'> 
      <img src={smoothy.image} alt="" />
      <div className="logo">
        <img src="../public/smoothie2.png" alt="" />
      </div>
    </div>
  )
}