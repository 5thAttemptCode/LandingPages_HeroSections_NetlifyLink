import React from 'react'
import { SMOOTHIES } from './Smoothies'
import ProductLink from './ProductLink'

export default function ProductSlider() {
  
  return (
    <div className='product-slider'>
      {SMOOTHIES.map((smoothy) => {
        return( 
        <ProductLink key={smoothy.id} smoothy={smoothy} />
        )
      })}
    </div>
  )
}
