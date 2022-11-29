import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import CartContext from '../context/CartContext'


const Layout = () => {
  return (
    <div>
        <NavBar/>
        
      <CartContext>
        <Outlet/>
      </CartContext>
    </div>
  )
}

export default Layout