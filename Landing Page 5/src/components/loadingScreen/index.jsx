import React, { useEffect } from 'react'
import './style.css'
import { gsap } from 'gsap'


export default function LoadingScreen() {

  useEffect(() => {
    // Disable scrolling on the body
    document.body.style.overflow = 'hidden'

    // Animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Remove the LoadingScreen component from the DOM
        const loadingScreen = document.querySelector('.loading-screen')
        if (loadingScreen) {
          loadingScreen.remove()
          // Enable scrolling on the body after removing the loading screen
          document.body.style.overflow = ''
        }
      }
    })

    // Define the animations
    tl.to('.one', { width: '100%', duration: 0.5, ease: "power4.in" })
      .to('.two', { height: '100%', duration: 0.5, ease: "power4.in" }, '-=0.5')
      .to('.three', { width: '100%', duration: 0.5, ease: "power4.in" }, '+=0.2')
      .to('.loading-bar:first-child', { x: '-100%', duration: 1, ease: "power4.in" }, '+=0.5')
      .to('.loading-bar:nth-child(2)', { x: '100%', duration: 1, ease: "power4.in" }, '-=1')

    // Return cleanup function
    return () => {
      tl.kill() // Kill the animation on unmount
    }
  }, [])

  return (
    <div className='loading-screen'>

      <div className="loading-bar" />

      <div className="loading-bar">
        <div className="arrow_box">
          <div className="line one" />
          <div className="line two" />
          <div className="arrow_box_single">
            <div className="line three" />
          </div>
        </div>
      </div>

    </div>
  )
}
