import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container pb-4">
          <div className="row">
            <div className="col-lg-2 col-sm-4 col-6">
              <div className="footer-logo">
                <a href="index.html">
                  <img src="/images/logo.png" alt="footer-logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
              <div className="footer-nav-links">
                <ul>
                  <li>
                    <NavLink to="/">HOME</NavLink>
                   
                  </li>
                  <li>
                    <NavLink to="/AboutUs">ABOUT US</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Gallery">GALLERY</NavLink>
                  </li>
                  <li>
                    <NavLink to="/">BLOG</NavLink>
                  </li>
                  <li>
                    <NavLink to="/ContactUs">CONTACT US</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 col-6">
              <div className="footer-connecting-links">
                <h2>CONNECT</h2>
                <ul>
                  <li>
                    <a
                      rel="nofollow"
                      href="https://www.facebook.com/navchetana.global/"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      href="https://www.instagram.com/navchetana.global/"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      href="https://www.linkedin.com/company/navchetanaglobal"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      rel="nofollow"
                      href="https://www.youtube.com/channel/UChJMa95otYycbs1CFg20xbg"
                    >
                      Youtube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 mt-md-5 mt-lg-0 col-12">
              <div className="footer-contact-address">
                <h2>CONTACT</h2>
                <ul>
                  <li>
                    <a href="mailto:info@navchetanaglobal.com">
                      info@navchetanaglobal.com
                    </a>
                  </li>
                  <li>+91 7835009900</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-md-5 mt-lg-0">
              <div className="footer-newslatter">
                <h2>NEWSLETTER</h2>
                <p>Join our weekly mailing list</p>
                <form action="assets/send.php">
                  <input
                    type="text"
                    placeholder="Your email"
                    name="newsletter"
                  />
                  <button type="submit">SUBSCRIBE</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer ">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-12">
                <div className="end-footer">
                  <ul>
                    <li>
                      <a href="policies.html">Terms and conditions</a>
                    </li>
                    <br />
                    <li>©2022 ShubhamNegi | All Rights Reserved</li> <br />
                    <li className="watermark">
                      <a href="https://www.wallcommunication.com/">
                        Designed by - Shubham Negi
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*   <div  className="col-lg-4 col-md-6">
          <div  className="rights">
              <p> </p>
              <p </p>
          </div>
      </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
