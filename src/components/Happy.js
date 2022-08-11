import React from "react";
import "../CSS/happy.css";

const Happy = () => {
  return (
    <div id="happy" className="pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 " >
            <img
              src={require("../images/people.png")}
              alt=""
              class="image-bg img-responsive"
            />
          </div>
          
          <div className="col-sm-12 col-lg-6 ">
            <div className="content">
              <div className="text-01">HAPPY CUSTOMERS</div>
              <div className="text-02">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, set
                amet.
              </div>
              <div className="text-03">
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh oui- sod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit dolore magna
                  aliquam erat voutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit..
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euisod tincidunt ut laoreet dolore magna
                  aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                  nostrud exerci tation ullamcorper suscipit.
                </p>
              </div>

              <div className="distance">
                <div className="txt">Flights</div>
                <div className="bg">
                  <div
                    className="animated-distance"
                    style={{ width: "94%", background: "#00a99d" }}
                  >
                    
                  </div>
                  <div className="percentage1">94%</div>
                </div>
              </div>

              <div className="distance">
                <div className="txt">Hotels</div>
                <div className="bg">
                  <div
                    className="animated-distance"
                    style={{ width: "87%", background: "#00a99d" }}
                  >
                    
                  </div>
                  <div className="percentage1">87%</div>
                </div>
              </div>

              <div className="distance">
                <div className="txt">Cars</div>
                <div className="bg">
                  <div
                    className="animated-distance"
                    style={{ width: "48%", background: "#00a99d" }}
                  >
                    
                  </div>
                  <div className="percentage1">48%</div>
                </div>
              </div>

              <div className="distance">
                <div className="txt">Cruises</div>
                <div className="bg">
                  <div
                    className="animated-distance"
                    style={{ width: "55%", background: "#00a99d" }}
                  >
                    
                  </div>
                  <div className="percentage1">55%</div>
                </div>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Happy;
