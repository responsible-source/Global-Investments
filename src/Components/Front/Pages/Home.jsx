import React, { useState } from 'react'
import Hero from '../Hero'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import About from '../About'
import Entitled from '../Entitled'
import Continuation from '../Continuation'
import Services from '../Services'
import Pricing from '../Pricing'
import Payment from '../Payment'
import Testimonials from '../Testimonials'
import Faq from '../Faq'
import Cryptonews from  '../Cryptonews'
import AboutVid from '../AboutVid'
import Footer from '../Footer'
import Partners from '../Partners'
import FinlogixWidget from '../FinlogixWidget'
import FinlogixTape from '../FinlogixTape'










const Home = () => {
  const [isOpen, Setisopen] = useState(false);

  const toggle = ()=>{
    Setisopen(!isOpen)
  }
  return (
    <div className='overflow-hidden w-[100%]'>
      <Sidebar toggle={toggle} isOpen={isOpen} Setisopen={Setisopen} />
        <Navbar toggle={toggle} />
        <Hero /> 
        <FinlogixTape />
        <About />
        <AboutVid />
        <Entitled />
        <Continuation />
        <Services />
        <Payment />
        <Pricing />
        <Testimonials />
        <Faq toggle={toggle} isOpen={isOpen}/>
        {/* <Cryptonews /> */}
        <Footer />
    </div>
  )
}

export default Home