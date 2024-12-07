import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Comp1 from './Comp1'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
import Nav from './Nav'
import Login from './Login'
import React from 'react'

const App = () => {
  return (

    <>
    <Nav/>
    {/* <Router>
      <Nav/>
        
      <Routes>
        <Route path='/Comp2' element={<Comp2/>}></Route>
      </Routes>
    </Router> */}
    </>
  )
}

export default App
