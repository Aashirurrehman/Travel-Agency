import React from 'react'
import Navbar from '../components/Navbar'

import Hero from '../pages/Hero'
import About from './About'
import Package from './Package'

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Package/>
        
    
    
    </div>

  )
}

export default Home