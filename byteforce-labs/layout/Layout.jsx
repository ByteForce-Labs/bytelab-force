import React from 'react'
import MainLayout from './MainLayout'
import Footer from './Footer'

const Layout = ({children, header}) => {
  return (
    <>
        <MainLayout header={header}/>
        {children}
        <Footer />
    </>
  )
}

export default Layout
