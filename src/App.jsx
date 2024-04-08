import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header'
import Home from './Pages/Home'
import Footer from './Component/Footer'
const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App