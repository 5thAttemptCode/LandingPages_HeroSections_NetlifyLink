import React, { useEffect, useState, useMemo } from 'react'
import './style.css'

import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '@/utils/firebase.config'
import SingleProject from '@/components/singleProject'


export default function Projects() {

  const [ projects, setProjects ] = useState([])
  const projectRef = useMemo(() => collection(db, "buildings"), [])
  const q = useMemo(() => query(projectRef), [ projectRef ])

  useEffect(() => {
    getDocs(q)
      .then((querySnapshot) => {
        let projects = []
        querySnapshot.forEach((doc) => {
          projects.push({ ...doc.data(), id: doc.id })
      })
      setProjects(projects)
    })
    .catch(err => {
      console.log(err.message);
    })
  }, [])


  //This function gets the previous index as an argument and returns null if this previous index equals the
  //index of the clicked element, otherwise, it returns the index. That way, clicking an active button will deactivate it, 
  //while clicking a deactivated button will move the activeIndex to that button.
  const [ activeIndex, setActiveIndex ] = useState(null)
  const handleItemClick = (index) => {
    setActiveIndex(prevIndex => prevIndex === index ? null : index);
  }


  return (
    <div className='projects'>
        <div className="header">
          <p>project name</p>
          <div>
            <p className='year'>year</p>
            <p>location</p>
          </div>
        </div>
        {projects && projects.map((project, index) => {
          return <SingleProject 
                  key={project.id} 
                  project={project} 
                  active={index === activeIndex} 
                  clickHandler={() => handleItemClick(index)}  
                />
        })}
    </div>
  )
}
