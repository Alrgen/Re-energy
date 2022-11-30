import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import CartContext from '../context/CartContext'


const Layout = () => {
  return (
    <div>
      <CartContext>
        <NavBar/>
        
        <Outlet/>
      </CartContext>
    </div>
  )
}

export default Layout