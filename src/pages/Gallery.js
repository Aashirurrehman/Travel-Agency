import React from "react";
import '../CSS/gallery.css';
import {NavLink } from "react-router-dom";

const Gallery = () => {
  return (
    <>
      <div id="parallax2" className="parallax2-section">
        <div className="container"></div>
      </div>

      <div className="about-breadCrumb">
        <div className="container">
          <div className="about-breadCrumb1 mt-0">
            <NavLink to={"/"}>Home</NavLink>
            <span>/</span>Gallery
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
