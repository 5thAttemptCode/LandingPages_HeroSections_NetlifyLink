import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header>
        <h4>Opus Global Investment</h4>
        <nav>
            <Link to="/">HOME</Link>
            <Link to="/service">SERVICE</Link>
            <Link to="/contact">CONTACT</Link>
        </nav>
    </header>
  )
}
