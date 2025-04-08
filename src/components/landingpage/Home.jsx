import React from 'react'
import HeroSection from './Herosection'
import FeaturesSection from './Featuresection'
import Footer from './Footer'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
    <div className='m-5'><HeroSection />
    <FeaturesSection />

    <Footer /></div>
    </div>)
}

export default Home