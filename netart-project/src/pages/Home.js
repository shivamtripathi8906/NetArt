import React from 'react';
import Navbar from '../components/Navbar';
import BannerContent from '../components/Banner-Content';
import AllProduct from '../components/AllProduct';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <BannerContent/>
      <AllProduct/>
      <Footer/>
    </div>
  )
}

export default Home