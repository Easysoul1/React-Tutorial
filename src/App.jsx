import './App.css'
import Login from './Login'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import { Fragment } from 'react'
import { BrowserRouter as BrowserRouters } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
        <BrowserRouters>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/Service" element = {<Service/>}/>
      </Routes>
    </BrowserRouters>
    </>
  )
}

export default App


// React Hooks
// UseState
// UseEffect
// UseContext
// UseReducer
// UseRef
// Custom Hooks
