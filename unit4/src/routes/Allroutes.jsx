import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Beauty from '../component/Beauty'
import Home from '../component/Home'
import Kids from '../component/Kids'
import Men from '../component/Men'
import Order from '../component/Order'
import Products from '../component/Products'
import Shoesbags from '../component/Shoesbags'
import Women from '../component/Women'
import Private from './Privateroutes'

function Allroutes() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/women' element={<Private><Women/></Private>}></Route>
    <Route path='/men' element={<Private><Men/></Private>}></Route>
    <Route path='/kids' element={<Private><Kids/></Private>}></Route>
    <Route path='/shoes&bags' element={<Private><Shoesbags/></Private>}></Route>
    <Route path='/beauty' element={<Private><Beauty/></Private>}></Route>
    <Route path='/products' element={<Private><Products/></Private>}></Route>
    <Route path='/order' element={<Private><Order/></Private>}></Route>
    
   </Routes>
  )
}

export default Allroutes