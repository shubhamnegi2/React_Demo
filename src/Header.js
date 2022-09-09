import React from "react";
import "./scss/header.css";
import './scss/mbbs-in-russia.css'

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="top-header">
        <div  className="currency-exchange">
          <a href="currency.html">
            <img src="images/currency-exchange-icon.png" alt="" />
          </a>
        </div>
        <div className="currency-exchange"></div>
        <div className="container d-md-flex justify-content-between align-items-center">
          <div className="top-header-left-section">
            <div className="contact-details top1">
              <ul className="d-flex">
                <li>
                  <a
                    rel="nofollow"
                    href="mailto:admissions@navchetanaglobal.com"
                  >
                    <i className="far fa-envelope"></i>
                    admissions@navchetanaglobal.com
                  </a>
                </li>
                <li>
                  <a rel="nofollow" href="7835009900">
                    <i className="fas fa-mobile-alt"></i>+91 78350 09900
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="top-header-right-section">
            <div className="login-details">
              <ul className="d-flex">
                <li>
                  <a href="student-login.html">
                    <i className="far fa-hand-point-up"></i>Student Login
                  </a>
                </li>
                <li>
                  <a href="partner-login.html">
                    <i className="far fa-hand-point-up"></i>Partner Login
                  </a>
                </li>
                <li>
                  <span>
                    <div className="search-box">
                      <button className="btn-search">
                        <i className="fas fa-search"></i>
                      </button>
                      <input
                        type="text"
                        className="input-search "
                        placeholder="Type to Search..."
                      />
                    </div>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="day-night-mode">
            <div
              title="Night Mode"
              className="night-mode"
            >
              <i className="fas fa-moon"></i>
            </div>
            <div title="day Mode" className="day-mode" >
              <i className="fas fa-sun"></i>
            </div>
          </div>
        </div>

        <a href="become-our-partner.html" className="become-our-partner">
          Become Partner
        </a>
        <a href="application-form.html" className="application-form1">
          Application Form
        </a>
      </div>
      <header>
        <header>
          <nav>
            <div className="nav-sidebar-button" >
              <i className="fas fa-bars"></i>
            </div>
            <div className="nav-close-button" >
              <i className="fas fa-times"></i>
            </div>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-2">
                  <div className="website-logo">
                    <NavLink to="/">
                      <img src="images/logo.png" alt="website-logo" />
                    </NavLink>
                  </div>
                </div>
                <div className="col-md-8 ">
                  <div className="nav-bar-tabs">
                    <ul className="d-flex ">
                      <li>
                        <NavLink to="/">HOME</NavLink>
                      </li>
                      <li>
                        <NavLink to="/AboutUs">ABOUT US</NavLink>
                      </li>
                      <li className="countries-tab">
                        COUNTRIES<i className="fas fa-caret-down"></i>
                        <ul className="countries-list">
                          <li>
                          <NavLink to="/Armenia">ARMENIA</NavLink>
                          </li>
                          <li>
                          <NavLink to="/Bangladesh">BANGLADESH</NavLink>
                          </li>
                          <li>
                          <NavLink to="/Belarus">BELARUS</NavLink>
                          </li>
                          <li>
                          <NavLink to="/China">CHINA</NavLink>
                          </li>
                          
                        </ul>
                      </li>
                      <li>
                        <NavLink to="/Gallery">GALLERY</NavLink>
                      </li>
                      <li>
                      <NavLink to="/">Blog</NavLink>
                      </li>
                      <li>
                      <NavLink to="/ContactUs">Contact Us</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 ">
                  <div className="nav-social-icons">
                    <ul className="d-flex ">
                      <li>
                        <a
                          rel="nofollow"
                          href="https://www.facebook.com/navchetana.global/"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          rel="nofollow"
                          href="https://www.instagram.com/navchetana.global/"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          rel="nofollow"
                          href="https://www.linkedin.com/company/navchetanaglobal"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/channel/UChJMa95otYycbs1CFg20xbg">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </header>
    </>
  );
}
