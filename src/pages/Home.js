import React from 'react'
import Navbar from '../components/Navbar'
import Parallax from '../components/Parallax'

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
        
    
    
    </div>

  )
}

export default Home