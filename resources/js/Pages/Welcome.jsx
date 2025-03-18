import First from '@/component/First'
import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '@/component/Home'
import Create from '@/component/Create'


function Welcome() {
  return (
    <Home/>
  //  <Router>    

  //   <Routes>
  //     <Route path='/' element={<Home/>}></Route>
  //     <Route path='/create' element={<Create/>}></Route>
  //   </Routes>
  //  </Router>
  )
}

export default Welcome