import React, { useEffect, useRef, useState } from 'react'
import "./productSlider.css"
import { SMOOTHIES } from '../../Smoothies'
import ProductLink from '../../components/productLink/ProductLink'
import { motion, useTransform, useScroll } from 'framer-motion'


export default function ProductSlider() {
  
  return (
    <div className='product-slider' >
        {SMOOTHIES.map((smoothy) => {
          return( 
            <ProductLink key={smoothy.id} smoothy={smoothy} />
          )
        })}
    </div>
  )
}
