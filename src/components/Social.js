import React from "react";
import '../CSS/social.css'

const Social = () => {
  return (
    <div class="social_sm_wrapper">
      <ul class="social_sm clearfix">
        <li>
          <a href="#">
            <i class="fa fa-facebook-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-google-plus"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-dribbble"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-vimeo-square"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Social;
