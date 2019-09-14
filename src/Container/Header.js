import React from "react";
import { Link } from "react-router-dom";
import "../Components/Home.css";
import "../Components/animasi.css";

const Header = () => {
  return (
    <>
      <div className="ikon">
        <div className="icons">
          <i class="fa fa-facebook"></i>
        </div>
        <div className="icons0">
          <i class="fa fa-linkedin-square"></i>
        </div>
        <div className="icons1">
          <i class="fa fa-github"></i>
        </div>
      </div>

      <div className="header">
        <h1>Mediums</h1>
      </div>
      <div className="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-bar">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item ">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              {/* <li class="nav-item ">
                <Link to="/profile" className="nav-link">
                  profile
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
