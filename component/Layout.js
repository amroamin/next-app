import React from 'react'
import Footer from './Footer'
import Navbar from './Nvabar'

const Layout = (props) => {
  return (
    <>
        <Navbar/>
        {props.children}
        <Footer/>
    </>
  )
}

export default Layout