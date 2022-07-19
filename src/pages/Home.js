import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Parallax from '../components/Parallax'
import Footer2 from '../components/Footer2'

import Hero from '../pages/Hero'
import About from './About'
import Partners from './Partners'


const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Parallax/>
       <Partners/>
       <Footer/>
       <Footer2/>
        
    
    
    </div>

  )
}

export default Home