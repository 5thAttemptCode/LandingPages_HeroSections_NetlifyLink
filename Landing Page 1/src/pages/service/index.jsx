import React from 'react'
import './style.css'
import PageHeadline from '../../components/pageHeadling'
import ContentBox from '../../components/contentBox'

export default function Service() {
  return (
    <div className='service page-container'>
      <div className="service-content">
        <PageHeadline h2="Services that we offer" />
        <ContentBox />
      </div>
    </div>
  )
}