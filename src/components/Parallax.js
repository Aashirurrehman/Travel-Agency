import React from "react";
import "../CSS/parallax.css";

const Parallax = () => {
  return (
    <>
      <div id="parallax" className="parallax-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <div className="txt1">Caucasus Vacation Packages</div>
              <div className="txt2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper.
              </div>
              <div className="txt3">
                From: Khazbegi (Goergia) <strong>$159.00</strong>
                <span>person</span>
              </div>
            </div>
            <div className="col-sm-2 ">
              <a href="#" className="btn red-btn">
                Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parallax;
