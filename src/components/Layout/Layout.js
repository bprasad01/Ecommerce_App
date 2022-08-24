import React from 'react'
import '../../Assets/css/main.css'
import '../../Assets/css/animate.css'
import '../../Assets/css/prettyPhoto.css'
import '../../Assets/css/price-range.css'
import '../../Assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Header from '../common/Header'
import Footer from '../common/Footer'


// import { CartProvider } from 'react-use-cart'
const Layout = ({children}) => {
  return (
    <>
        {/* <CartProvider> */}
        <Header />
        {children}
        <Footer />
        {/* </CartProvider> */}
    </>
  )
}

export default Layout