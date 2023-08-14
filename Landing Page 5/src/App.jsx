
import React from 'react'
import Bar from './Components/Bar'
import Experience from './Components/Experience'
import Main from './Components/Main'



export default function App() {
  return (
    <>
      <section>
        <div className="container">
         <Bar background="black" height="10vh" />
         <Main />
        </div>
        <div className="canvas">
          {/* <Experience /> */}
        </div>
      </section>
    </>
  )
}
