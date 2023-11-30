import React from 'react'

import Scene from './components/canvas'
import { BrowserRouter, Routes, Route, useRoutes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Service from './pages/service'
import Contact from './pages/contact'
import Nav from './components/nav'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


export default function App() {

  return ( 
    <BrowserRouter>
      <Nav />
      <Scene />
      <RoutesElement />
    </BrowserRouter>
  )
}

const RoutesElement = () => {
  let location = useLocation();
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/service", element: <Service /> },
    { path: "/contact", element: <Contact /> }
  ]);

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={1000}
        classNames="fade"
      >
        <div>
           {routes}
        </div>
      </CSSTransition>
    </TransitionGroup>
  )
}
