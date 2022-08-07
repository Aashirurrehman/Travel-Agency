import React from 'react'
import Footer from './Footer'
import Footer2 from './Footer2'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
     <Navbar/>
     <Outlet/>
     <Footer/>
     <Footer2/>
    
    
    
    </>
  )
}

export default Layout