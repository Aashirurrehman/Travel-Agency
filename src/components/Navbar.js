import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/navbar.css";
import logo01 from "../images/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <NavLink to={'/'} className="navbar-brand">
            <img src={`${logo01}`} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={'/'} activeClassName="current" className="nav-link active" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/about'} className="nav-link" >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/gallery'} className="nav-link" >
                  Gallery
                </NavLink>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink to={'/flight'} className="dropdown-item" href="#">
                      Flights
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink to={'/hotel'} className="dropdown-item" href="#">
                      Hotels
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                     Rent a car
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                     Cruises
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <NavLink to={'/contact'} className="nav-link" href="#">
                  Contacts
                </NavLink>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
