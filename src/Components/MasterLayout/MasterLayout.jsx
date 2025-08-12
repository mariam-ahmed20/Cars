import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

const MasterLayout = () => {
  return (
    <div className="app">
    <NavBar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default MasterLayout