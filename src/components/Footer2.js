import React from "react";
import '../CSS/footer.css'

const Footer2 = () => {
  return (
    <div className="footer-2">
      <div className="container">
        <div className="left_side">
          Copyright © 2022 {""}
          <a href="#" target="_blank">
            <strong>AASHIR</strong>
          </a>
          <span>|</span> <a href="#">Privacy Policy</a> <span>|</span>
          <a href="#">About Us</a> <span>|</span> <a href="#">FAQ</a>
          <span>|</span> <a href="#">Contact Support</a>
        </div>
        <div className="right_side">
          Designed by {""}
           <a href="#" target="_blank">
            <strong>AASHIR</strong>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
