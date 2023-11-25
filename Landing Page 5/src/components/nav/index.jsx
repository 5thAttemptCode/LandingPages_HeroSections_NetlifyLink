import React from 'react'
import './style.css'

import { NavLink } from 'react-router-dom'


export default function Nav() {

  return (
    <nav>
      <NavLink to="/">CS Studio</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

