import React from 'react'
import "./productPage.css"
import { useLocation } from 'react-router-dom'


export default function ProductPage() {

  const location = useLocation()
  const smoothy = location.state.smoothy

  return (
    <div className='product-page'> 
      <img src={smoothy.image} className='background-image'/>
      <div className="product-page-container">
        <div className="logo">
          <img src="../public/smoothie2.png" alt="" />
        </div>
        <div className="details">
          <h1>{smoothy.name}</h1>
        </div>
      </div>
    </div>
  )
}