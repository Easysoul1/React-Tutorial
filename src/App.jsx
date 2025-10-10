import './App.css'
import Login from './Login'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import UseRef from './pages/UseRef'
import { Fragment } from 'react'
import { BrowserRouter as BrowserRouters } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Memo from './pages/TodoList'


function App() {

  return (
    <>
    <Memo/>
        <BrowserRouters>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/About" element = {<About/>}/>
        <Route path = "/Service" element = {<Service/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        <Route path = "/useref" element = {<UseRef/>}/>
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
