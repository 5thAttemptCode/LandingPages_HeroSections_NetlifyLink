import React, { useState } from 'react'
import "./style.css"
import { Link } from 'react-router-dom'


export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <h4>Opus Global Investment</h4>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/service">SERVICE</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}></div>
      <div className={`responsive-nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/service" onClick={() => setMenuOpen(false)}>SERVICE</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
      </div>
    </header>
  )
}

