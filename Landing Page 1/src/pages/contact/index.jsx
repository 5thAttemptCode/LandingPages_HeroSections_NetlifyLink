import React from 'react'
import './style.css'
import PageHeadline from '../../components/pageHeadling'

export default function Contact() {
  return (
    <div className='contact page-container'>
      <div className="page-content">
        <PageHeadline h2="CONTACT US" />
        <div className="info">
          <div>
            <h3>OPUS GLOBAL INVESTMENT</h3>
            <p>Big Street 8</p>
            <p>10547 London, UK</p>
          </div>
          <h3>Mail: opus@globus.com</h3>
          <h3>Phone: 123 / 4567 90</h3>
        </div>
      </div>
    </div>
  )
}
