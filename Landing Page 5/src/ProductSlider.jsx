import React, { useEffect, useRef, useState } from 'react'
import { SMOOTHIES } from './Smoothies'
import ProductLink from './ProductLink'
import { motion } from 'framer-motion'


export default function ProductSlider() {

  const [ width, setWidth ] = useState(0)
  const carouselWidth = useRef()

  useEffect(() => {
    console.log(carouselWidth.current.offsetWidth);
  }, [])
  
  return (
    <motion.div className='product-slider carousel' ref={carouselWidth} >
      <motion.div drag="x" dragConstraints={{ right: 0}} className='inner-carousel'>
        {SMOOTHIES.map((smoothy) => {
          return( 
          <motion.div className='item' key={smoothy.id}>
            <ProductLink smoothy={smoothy} />
          </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
