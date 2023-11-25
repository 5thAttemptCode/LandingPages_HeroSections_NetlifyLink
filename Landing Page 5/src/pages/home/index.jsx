import React from 'react'
import './style.css'
import Projects from '@/components/projects'
import Title from '@/components/title'


export default function Home() {
  return (
    <div className='home'>
     <Title />
     <Projects />
    </div>
  )
}
