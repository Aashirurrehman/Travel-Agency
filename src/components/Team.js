import React from "react";
import team1 from "../images/team01.jpg";
import team2 from "../images/team02.jpg";
import team3 from "../images/team03.jpg";
import team4 from "../images/team04.jpg";
import "../CSS/team.css";
import Social from "./Social";

const Team = () => {
  return (
    <>
      <section id="services" className="services">
        <div className="container">
          <div className="section-title text-center">
            <h1 className="heading">Our Team</h1>

            <p className="heading-para">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod <br />
              tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="figure">
                  <img src={team1} class="member-img" />
                  <div class="designation">Marketing Manager</div>
                </div>
                <div class="member-info">
                  <div className="member-name">Jynda Martin</div>
                  <div className="job-description">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim.
                  </div>
                  <Social/>
                </div>
                
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="figure">
                  <img src={team2} class="member-img" />
                  <div class="designation">Site Administrator</div>
                </div>
                <div class="member-info">
                  <div className="member-name">George Smith</div>
                  <div className="job-description">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim.
                  </div>
                  <Social/>
                </div>
                
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="figure">
                  <img src={team3} class="member-img" />
                  <div class="designation">Tour Operator</div>
                </div>
                <div class="member-info">
                  <div className="member-name">Bill Amadeus</div>
                  <div className="job-description">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim.
                  </div>
                  <Social/>
                </div>
                
              </div>
            </div>

            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member">
                <div class="figure">
                  <img src={team4} class="member-img" />
                  <div class="designation">Director</div>
                </div>
                <div class="member-info">
                  <div className="member-name">Amanda Stoun</div>
                  <div className="job-description">
                    Nam liber tempor cum soluta nobis eleifend option congue
                    nihil imperdiet doming id quod mazim.
                  </div>
                  <Social/>
                </div>
                
              </div>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
