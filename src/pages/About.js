import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../CSS/about.css";
import Services from "./Services";
import plane from "../images/company1.png";
import Team from "../components/Team";

const About = () => {
  return (
    <>
      <div className="about-page">
        <div className="about-banner"></div>
        <div className="about-breadCrumb">
          <div className="container">
            <div className="about-breadCrumb1 mt-0">
              <NavLink to={"/"}>Home</NavLink>
              <span>/</span>About
            </div>
          </div>
        </div>

        <Services />

        <div id="offers" className="position-relative">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="heading">What We Offer</h1>
              <p className="offer-para text-center">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod <br /> tincidunt ut laoreet dolore
                magna aliquam erat volutpat.
              </p>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <ul className="offer-list">
                  <li>
                    <Link to={"#"}>
                      Nam liber tempor cum soluta nobis eleifend option congue
                      nihil imperdiet;
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      Option congue nihil imperdiet doming id quod mazim
                      placerat facer;
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      Eodem modo typi, qui nunc nobis videntur parum clari,
                      fiant sollemnes;
                    </Link>
                  </li>
                  <li>
                    <Link to={"#"}>
                      Investigationes demonstraverunt lectores
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-sm-6 ">
                <p className="para-line mb-0">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                  aliquip ex ea commodo consequat. Eodem modo typi, qui nunc
                  nobis videntur parum clari, fiant sollemnes in futurum. Ut
                  wisi enim ad minim veniam, quis nostrud exerci tation
                  ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="company" className="position-relative">
          <div className="container">
            <div className="section-title text-center">
              <h1 className="heading">About Our Company</h1>
              <p className="offer-para text-center">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod <br /> tincidunt ut laoreet dolore
                magna aliquam erat volutpat.
              </p>
            </div>

            <div className="row">
              <div className="col-sm-12 col-lg-6 column_down">
                <img
                  src={plane}
                  className="plane-bg mt-0 img-responsive"
                  alt="plane"
                />
              </div>

              <div className="col-sm-12 col-lg-6 column_up ">
                <div className="content mt-0">
                  <div className="content-title">Travel Agency</div>
                  <div className="text-03">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                      sed diam nonummy nibh euisod tincidunt ut laoreet dolore
                      magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                      quis nostrud exerci tation ullamcorper suscipit.
                    </p>
                  </div>

                  <div className="distance">
                    <div className="txt">Flights</div>
                    <div className="bg">
                      <div
                        className="animated-distance"
                        style={{ width: "94%", background: "#00a99d" }}
                      >
                        <span>94%</span>
                      </div>
                    </div>
                  </div>

                  <div className="distance">
                    <div className="txt">Hotels</div>
                    <div className="bg">
                      <div
                        className="animated-distance"
                        style={{ width: "87%", background: "#00a99d" }}
                      >
                        <span>87%</span>
                      </div>
                    </div>
                  </div>

                  <div className="distance">
                    <div className="txt">Cars</div>
                    <div className="bg">
                      <div
                        className="animated-distance"
                        style={{ width: "48%", background: "#00a99d" }}
                      >
                        <span>48%</span>
                      </div>
                    </div>
                  </div>

                  <div className="distance">
                    <div className="txt">Cruises</div>
                    <div className="bg">
                      <div
                        className="animated-distance"
                        style={{ width: "55%", background: "#00a99d" }}
                      >
                        <span>55%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Team/>
      </div>
    </>
  );
};

export default About;
