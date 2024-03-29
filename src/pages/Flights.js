import React from "react";
import { NavLink } from "react-router-dom";

const Flights = () => {
  return (
    <>
      <div id="google_map_section">
        <div id="google_map">
          <iframe
            style={{ border: "0", width: "100% ", height: " 440px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57929.23355645912!2d67.01519255!3d24.8441321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x25e252450977ec12!2sSaddar%20Town%2C%20Karachi%2C%20Sindh!5e0!3m2!1sen!2s!4v1659915647291!5m2!1sen!2s"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="about-breadCrumb">
        <div className="container">
          <div className="about-breadCrumb1 mt-0">
            <NavLink to={"/"}>Home</NavLink>
            <span>/</span>Flights
          </div>
        </div>
      </div>

      <div className="flight-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <form class="form2 form2_flights">
                <div class="select1_wrapper clearfix">
                  <label>Passenger:</label>
                  <div class="select1_inner">
                    <select class="select2 select select3" style="width: 100%">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flights;
