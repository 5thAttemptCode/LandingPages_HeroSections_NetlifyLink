import React from 'react'
import './style.css'

import { motion } from 'framer-motion'


const FuzzyOverlay = () => {
  return <motion.div
          className="fuzzy-overlay"
          initial={{ transform: "translateX(-10vw) translateY(-10vh)" }}
          animate={{ transform: "translateX(10vw) translateY(10vh)" }}
          transition={{
            repeat: Infinity,
            duration: 0.2,
            ease: "linear",
          }}
        />
}

export default function Overlay() {
  return (
    <div className='overlay'>
      <FuzzyOverlay />
    </div>
  )
}
