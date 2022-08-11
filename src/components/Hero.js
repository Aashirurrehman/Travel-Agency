import React from "react";

import "../CSS/hero.css";
import FrontTab from "../components/FrontTab";

const Hero = () => {
  return (
    <div>
      <section id="hero">
        <div className="hero-container">
          <div className="container">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="txt1">
                    <span>Welcome To Our</span>
                  </div>
                  <div className="txt2">
                    <span>TRAVEL AGENCY</span>
                  </div>
                  <div className="txt3">
                    <span>
                      Nam liber tempor cum soluta nobis eleifend option congue
                      nihil imperdiet doming id quod.
                    </span>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="txt1">
                    <span>7 - Day Tour</span>
                  </div>
                  <div className="txt2">
                    <span>AMAZING CARIBBEAN</span>
                  </div>
                  <div className="txt3">
                    <span>
                    Lorem ipsum dolor eleifend option congue nihil imperdiet doming id quod
                    </span>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="txt1">
                    <span>5 Days In</span>
                  </div>
                  <div className="txt2">
                    <span>PARIS (Capital Of World)</span>
                  </div>
                  <div className="txt3">
                    <span>
                      NNam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <FrontTab/>
          </div>
        </div>
      </section>

      <main id="main"></main>
    </div>
  );
};

export default Hero;
