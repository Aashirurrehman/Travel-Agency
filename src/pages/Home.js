import React from 'react'
import Navbar from '../components/Navbar'
import Parallax from '../components/Parallax'

import Hero from '../pages/Hero'
import About from './About'


const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <About/>
       <Parallax/>
        
    
    
    </div>

  )
}

export default Home