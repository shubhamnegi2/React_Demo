import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./scss/about-us.css";

export default function AboutUs() {
  return (
    <>
      <Header />
      <div>
        <>
          <section className="about-us">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="about-us-img">
                    <img
                      src=" images/ABOUT-US-PAGE-removebg-preview.png"
                      alt="about-us-img"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-us-discription">
                    <h1>ABOUT US</h1>
                    <p>
                      We are one of the most competitive names in India as far
                      as expertise in career counseling, aptitude testing, and
                      study abroad counseling is concerned. One of the most
                      trusted by some of the most renowned medical colleges in
                      Asia as well as in almost all the continents of the Globe.
                      <br />
                      Managing Director Dr. Shubham Raj Gupta himself is a
                      successful M.B.B.S. pass out from a renowned medical
                      university of Kazakhstan and a visionary behind this mega
                      education abroad concept.
                    </p>
                    <h2>OUR STORY</h2>
                    <p>
                      Navchetana International Education began its operations in
                      the year 2013, answering the calling of a continuously
                      increasing international student population. The initial
                      response to our initiative was tremendous and spurred the
                      creation of several other domains. Over time, those little
                      steps developed into the large database of the
                      International Student Network which is now the leading
                      online resource for international students around the
                      world. Our goal is to enable students to pursue their
                      dreams of seeing the world and improving their educational
                      experience. We want to help students in every way
                      imaginable to make them successful in their international
                      education endeavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="our-missions">
            <div className="container">
              <div className="row  align-items-center">
                <div className="col-lg-6">
                  <div className="mission-and-vision">
                    <h2>VISION</h2>
                    <p>
                      Our vision is to be the company that best recognizes and
                      serves the needs of international students around the
                      world. We strive to provide students world-class resources
                      to help them investigate and pursue an international
                      education, through relevant content, custom online tools,
                      and engaging digital content that offers only
                      best-in-class products and services.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mission-img">
                    <img
                      src=" images/mission-and-vission.png"
                      alt="mission and vision"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="our-services">
            <h2>OUR SERVICES</h2>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="services service1" style={{backgroundColor: "#f5f5f5"}}>
                    <div className="empty-space" />
                    <span className="service-number service-number1">01</span>
                    <p>GUIDANCE AND COUNSELING</p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="services service2" style={{backgroundColor: "#f5f5f5"}}>
                    <p>ADMISSION CONFIRMATION PROCEDURE</p>
                    <span className="service-number service-number1">02</span>
                    <div className="empty-space" />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="services service3" style={{backgroundColor: "#f5f5f5"}}>
                    <div className="empty-space" />
                    <span className="service-number service-number3">03</span>
                    <p>VISA AND TICKETING</p>
                  </div>
                </div>
                <hr />
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="services service4" style={{backgroundColor: "#f5f5f5"}}>
                    <p>REACHING THE UNIVERSITY</p>
                    <span className="service-number service-number4">04</span>
                    <div className="empty-space" />
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-6">
                  <div className="services service5" style={{backgroundColor: "#f5f5f5"}}>
                    <div className="empty-space" />
                    <span className="service-number service-number5">05</span>
                    <p>
                      INFORMATION REGARDING EXAMINATIONS, CURRICULUM OR
                      LIFESTYLE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </div>
      <Footer />
    </>
  );
}
