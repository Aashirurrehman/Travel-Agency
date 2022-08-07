import React from "react";
import "../CSS/about.css";
import why1 from "../images/why1.png";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title text-center">
          <h1 className="heading">WHY WE ARE THE BEST</h1>

          <p className="heading-para">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod <br />
            tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="fa fa-plane-departure"></i>
              </div>

              <h4 className="title">
                <a href="">Amazing Travel</a>
              </h4>
              <p className="description">
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim.
              </p>
              <div className="readMore">
                <a href="#">
                  Read More <i className="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="fa fa-file"></i>
              </div>
              <h4 className="title">
                <a href="">Discovery</a>
              </h4>
              <p className="description">
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim.
              </p>
              <div className="readMore">
                <a href="#">
                  Read More <i className="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-flag"></i>
              </div>
              <h4 className="title">
                <a href="">Book Your Trip</a>
              </h4>
              <p className="description">
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim.
              </p>
              <div className="readMore">
                <a href="#">
                  Read More <i className="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch ">
            <div className="icon-box">
              <div className="icon">
                <i className="fas fa-comments"></i>
              </div>
              <h4 className="title">
                <a href="">Nice Support</a>
              </h4>
              <p className="description">
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod mazim.
              </p>
              <div className="readMore">
                <a href="#">
                  Read More <i className="fa fa-caret-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
