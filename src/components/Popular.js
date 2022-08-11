import React from "react";
import popular1 from '../images/popular01.jpg'
import popular2 from '../images/popular02.jpg'
import popular3 from '../images/popular03.jpg'

const Popular = () => {
  return (
    <section id="services" className="services">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="heading">POPULAR CRUISES</h1>

            <p className="heading-para">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod <br />
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-4 col-md-12 d-flex align-items-stretch">
              <div class="member">
                <div class="figure">
                  <img src={popular1} class="member-img" />
                  <div class="designation">Bahamas 17 Deal Offers</div>
                </div>
                <div class="member-info">
                  <div className="member-name">Bahamas 7 Night Offer</div>
                  <div className="job-description">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim.
                  </div>
                 
                </div>
                
              </div>
            </div>

            <div class="col-lg-4 col-md-12 d-flex align-items-stretch">
              <div class="member">
                <div class="figure">
                  <img src={popular2} class="member-img" />
                  <div class="designation">Mediterranean 17 Deal Offers</div>
                </div>
                <div class="member-info">
                  <div className="member-name">Mediterranean 7 Night Offer</div>
                  <div className="job-description">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim.
                  </div>
                  
                </div>
                
              </div>
            </div>

            <div class="col-lg-4 col-md-12 d-flex align-items-stretch">
              <div class="member">
                <div class="figure">
                  <img src={popular3} class="member-img" />
                  <div class="designation">Greece 17 Night Offer</div>
                </div>
                <div class="member-info">
                  <div className="member-name">Greece 7 Night Offer</div>
                  <div className="job-description">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim.
                  </div>
                  
                </div>
                
              </div>
            </div>

            
          </div>
        </div>
      </section>
  );
};

export default Popular;
