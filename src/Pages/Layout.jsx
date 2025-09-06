import React from 'react'
import Nav from '../Components/Navbar/Nav'
import Footer from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
  )
}
