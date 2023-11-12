import React from 'react'
import './style.css'

export default function SingleProject({ project, active, clickHandler }) {

  return (
    <div className='single-project' onClick={clickHandler}>
      <div className="data-wrapper">
        <p>{project.name}</p>
        <div className='year-location'>
          <p>{project.year}</p>
          <p>{project.location}</p>
        </div>
      </div>
      <div className={`info ${active ? 'active' : ''}`}>
        <img src={project.image} alt="" />
      </div>
    </div>
  )
}
