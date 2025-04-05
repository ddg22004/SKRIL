import React from 'react'
import HeroSection from './Herosection'
import FeaturesSection from './Featuresection'
import PlansBillingSection from './PlansBillingSection'
import FAQSection from './FAQSection'
import TestimonialsSection from './TestimonialSection'
import Footer from './Footer'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
    <div className='m-5'><HeroSection />
    <FeaturesSection />
    <PlansBillingSection />
    <FAQSection />
    <TestimonialsSection />
    <Footer /></div>
    </div>)
}

export default Home