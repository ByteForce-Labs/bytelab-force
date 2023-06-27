import React from 'react'
import MainLayout from './MainLayout'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
        <MainLayout />
        {children}
        <Footer />
    </>
  )
}

export default Layout
