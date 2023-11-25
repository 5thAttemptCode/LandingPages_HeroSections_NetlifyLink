import React from 'react'
import './style.css'


export default function Title() {

  const H1 = ({children}) => <h1>{children}</h1>

  return (
    <div className="title">
      <H1>BRUT</H1>
    </div>
  )
}
