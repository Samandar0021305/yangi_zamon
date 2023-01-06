import React from 'react'
import Navbar from "../Navbar"
import Footer from '../Footer/Footer'

const Layout = React.memo(({children}) => {
  return (
    <div>
     <Navbar />
     {children}
     <Footer />
    </div>
  )
})

export default Layout