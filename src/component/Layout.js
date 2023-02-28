import React, { Children } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/main.css"
import styled from "styled-components"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}


export default Layout
