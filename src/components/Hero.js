import React from 'react'
import bgImg from '../images/slider.jpg'
import '../CSS/hero.css'
import FrontTab from '../components/FrontTab'

const Hero = () => {
  return (
    <div>
         <section id="hero">
            <div class="hero-container">
                
                <FrontTab/>
            </div>
        </section>

        <main id="main"></main>
    </div>
  )
}

export default Hero;