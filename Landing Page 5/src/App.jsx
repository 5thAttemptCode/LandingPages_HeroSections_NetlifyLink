
import React from 'react'
import Bar from './Components/Bar'
import Experience from './Components/Experience'
import Main from './Components/Main'



export default function App() {
  return (
    <>
      <section>
        <div className="box">
         <Bar />
         <Main />
        </div>
        <div className="canvas">
          <Experience />
        </div>
      </section>
    </>
  )
}
