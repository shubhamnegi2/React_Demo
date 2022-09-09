import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./scss/index.css";
import $ from "jquery";
export default function NavchetanaEducation() {  
  return (
    <>
      <Header />
      <div>
        <section classname="homeImg" style={{width:'100%', height:'100vh'}}>
          <img src="images/homepic.jpeg" alt="homepic" style={{width:'100%', height:'100vh'}}/>
        </section>
        <section className="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <div className="about-us-gif">
                  <img src=" images/gif22.gif" alt="" />
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={1500}
              >
                <div className="row">
                  <div className="col-md-12">
                    <div className="about-us-contant">
                      <h2>WHO WE ARE?</h2>
                      <p>
                        We are one of the most competitive names in India as far
                        as expertise in career counselling, aptitude testing and
                        study abroad counselling is concerned. One of the most
                        trusted by some of the most renowned medical colleges in
                        Asia as well as in almost all the continents of the
                        Globe.
                        <br />
                        Managing Director Dr. Shubham Raj Gupta himself is a
                        successful M.B.B.S. pass out from a renowned medical
                        university of Kazakhstan. and a visionary behind this
                        mega education abroad concept
                      </p>
                      <a target="_blank" href="about-us.html">
                        Read more..
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* why choose abroad us section start here */}
        <section className="facilities">
          <div className="container">
            <div
              className="facilites-heading"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <h2>WHY STUDY MBBS IN ABROAD?</h2>
            </div>
            <div className="row">
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="facilitiy facilitiy1">
                  <img src=" images/facilitiy1.svg" alt="" />
                  <h3>Affordable Fee Structure</h3>
                  <p>
                    Affordable Fee Structure of foreign medical universities as
                    compare to Private Medical Universities of India
                  </p>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="facilitiy facilitiy2">
                  <img src=" images/facilitiy2.svg" alt="" />
                  <h3>No donation</h3>
                  <p>No donation is asked, which is a norm here in India</p>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="facilitiy facilitiy3">
                  <img src=" images/facilitiy3.svg" alt="" />
                  <h3>Easy Admission</h3>
                  <p>Admission process is very simple in most of them</p>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="facilitiy facilitiy4">
                  <img src=" images/facilitiy4.svg" alt="" />
                  <h3>No Entrance Test</h3>
                  <p>No separate entrance exams are conducted.</p>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="facilitiy facilitiy5">
                  <img src=" images/facilitiy5.svg" alt="" />
                  <h3>Admission in the Top Ranked Universities</h3>
                  <p>
                    Most of the medical universities Indian students get
                    admissions to are NMC - National Medical Commission
                    (formerly MCI - Medical council of India). Students just
                    need to qualify for NEET-UG of the same year when they apply
                    in an overseas medical university.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="facilitiy facilitiy6">
                  <img src=" images/facilitiy6.svg" alt="" />
                  <h3>Worldwide Recognition</h3>
                  <p>
                    These medical universities are also approved by world
                    medical bodies like WHO &amp; UNESCO and are listed in WDOMS
                    - World Directory of Medical Schools
                  </p>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up" data-aos-duration={3000}>
              <div className="end-paragraph">
                <p>
                  Being a doctor is considered as the most respectful career
                  since ages, not only in India but world wide students every
                  year wish to get enrolled with the most famous and top level
                  medical universities worldwide. Apart from being respectful,
                  career in medicine is also the most rewarding one.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* why choose abroad us section ends here */}
        {/* services abroad us section stsrt here */}
        <section className="services">
          <div className="container">
            <div
              className="services-heading"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <h2>Our Services</h2>
            </div>
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="services-card service1">
                  <div className="services-card-heading">
                    <img src=" images/services3.png" alt="services1" />
                    <h3>
                      EDUCATION <br /> IMMIGRATION COUNSELLING
                    </h3>
                  </div>
                  <p>
                    Being in the business for nearly a decade, we at Navchetana
                    International Education provide guidance to each and every
                    student individually. as per his / her eligibility &amp;
                    overall profile. Selection of the course, the country and
                    the university is the first and the most important step to
                    start the journey of a life long successful carrier.
                    Accordingly we give importance to this aspect as per
                    specific need of the candidates.
                  </p>
                  <a href="services.html">Read More..</a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="services-card service2">
                  <div className="services-card-heading">
                    <img src=" images/services4.png" alt="" />
                    <h3>
                      DREAM
                      <br /> COLLEGE APPLICATION
                    </h3>
                  </div>
                  <p>
                    After the selection of the course, country and the
                    university, we help in filling the application for the
                    selected course through our team of trained individuals,
                    with extreme care. As due to a slightest of mistake, all
                    hard work can go in vein, resulting in a lot of valuable
                    time, energy and monetary waste.
                  </p>
                  <a href="services.html">Read More..</a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={2000}
              >
                <div className="services-card service3">
                  <div className="services-card-heading">
                    <img src=" images/services2.png" alt="" />
                    <h3>
                      GUARANTEED
                      <br /> ADMISSIONS PROGRAM
                    </h3>
                  </div>
                  <p>
                    An early and wisely taken career decision helps in formation
                    of a life long successful career. Navchetana International
                    Education is A gateway to turn your dream to study abroad
                    into reality. Because this could be your ticket to get the
                    best education and learning experience from the best higher
                    education destinations across the world.
                  </p>
                  <a href="services.html">Read More.</a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={2500}
              >
                <div className="services-card service5">
                  <div className="services-card-heading">
                    <img src=" images/services6.png" alt="" />
                    <h3>
                      GUARANTEED
                      <br /> TRANSFER PROGRAM
                    </h3>
                  </div>
                  <p>
                    A hassle-free way to continue your education in a foreign
                    university. A flexible program that takes your aspirations
                    into account and allows you to continue your studies
                    overseas, irrespective of the course you choose to pursue.
                  </p>
                  <a href="services.html">Read More..</a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration={2500}
              >
                <div className="services-card service6">
                  <div className="services-card-heading">
                    <img src=" images/services5.png" alt="" />
                    <h3>
                      MBBS <br /> COMPANION
                    </h3>
                  </div>
                  <p>
                    Yes, it's possible to pursue study of medicine at an
                    affordable cost! Enroll in the top medical universities
                    abroad with guidance from our experts who will not just
                    provide you with all the necessary information but will
                    facilitate your admission process also.
                  </p>
                  <a href="services.html">Read More..</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="logs">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div data-count={100} className="year-of-exprience">
                  <span className="number">7</span>
                  <span className="plus-icon">
                    <i className="fas fa-plus" />
                  </span>
                  <p data-aos="fade-up" data-aos-duration={1500}>
                    Years of experience
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div data-count={150} className="countries">
                  <span className="number">25</span>
                  <span className="plus-icon">
                    <i className="fas fa-plus" />
                  </span>
                  <p data-aos="fade-up" data-aos-duration={1500}>
                    Countries
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="universities">
                  <span className="number">450</span>
                  <span className="plus-icon">
                    <i className="fas fa-plus" />
                  </span>
                  <p data-aos="fade-up" data-aos-duration={1500}>
                    Universities &amp; Colleges
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div data-count={300} className="students">
                  <span className="number">1750</span>
                  <span className="plus-icon">
                    <i className="fas fa-plus" />
                  </span>
                  <p data-aos="fade-up" data-aos-duration={1500}>
                    Students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="avilable-in-countries">
          <div className="container owl-carousel owl-theme avilable-in-countries-slider">
            <div className="row item">
              <div className="col-lg-6">
                <div className="details-about-countries">
                  <h2 data-aos="fade-up" data-aos-duration={1000}>
                    STUDY MBBS IN RUSSIA
                  </h2>
                  <p data-aos="fade-up" data-aos-duration={2000}>
                    Russia has a very old time reputation in the field of
                    Medical Education and Russian Medical Universities make it
                    possible by providing quality medical education. More than
                    50 Universities of Russia are WHO approved out of which 30
                    rank in the first 100 out of overall world medical
                    universities. MBBS fee in Russia is very much affordable as
                    compared to Indian Medical Universities and private
                    colleges. Any student from India can take direct MBBS
                    Admission in top Medical Universities of Russia without any
                    additional entrance exams apart from NEET- National
                    Eligibility cum Entrance Exam conducted by NTA - National
                    Testing Agency in India.
                    <br />
                    Since more than two decades Russia is the most preferred
                    destinations for Indian students to Study MBBS. It is
                    primarily due to very low fee structure of Russian
                    Universities, which are Russian Government sponsored and the
                    fact is that the fee over there in Russia is lower than
                    Indian Universities. There are no entrance exams to get
                    admission to a medical Universities in Russia.
                  </p>
                  <a
                    data-aos="fade-up"
                    data-aos-duration={2500}
                    target="_blank"
                    href="mbbs-in-russia.html"
                  >
                    Read More...
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="countries-img">
                  <img src=" images/russia.png" alt="russia-img" />
                </div>
              </div>
            </div>            
          </div>
        </section>
        <hr />
        {/* policies section ends here */}
        <section className="policies">
          <div className="container">
            <div className="testimonials-heading">
              <h2>POINTS TO CONSIDER BEFORE APPLYING TO STUDY MBBS ABROAD!</h2>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="points">
                  <ul>
                    <li data-aos="fade-up" data-aos-duration={1000}>
                      <i className="fas fa-hand-point-right" />
                      First thing is to check the credentials and knowledge of
                      Study MBBS abroad consultant
                    </li>
                    <li data-aos="fade-up" data-aos-duration={1500}>
                      <i className="fas fa-hand-point-right" />
                      Foreign medical university must be recognized by NMC
                      National Medical Commission of India, formerly known as
                      (MCI) Medical Council of India.
                    </li>
                    <li data-aos="fade-up" data-aos-duration={2000}>
                      <i className="fas fa-hand-point-right" />
                      MBBS aspirants must also look for the University's
                      approval by world medical &amp; health care bodies like
                      WHO &amp; WDOMS, as it gives them world wide acceptance.{" "}
                    </li>
                    <li data-aos="fade-up" data-aos-duration={2500}>
                      <i className="fas fa-hand-point-right" />
                      Foreign university you are applying for must have
                      recognition from other nations medical bodies like USMLE,
                      PLAB etc as it gives the graduate doctors better chance
                      for applying their PG in universities of United States and
                      United Kingdom
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="points">
                  <ul>
                    <li data-aos="fade-up" data-aos-duration={1000}>
                      <i className="fas fa-hand-point-right" />
                      FMGE / MCI passing ratio of the medicine graduates from
                      should also be taken into consideration{" "}
                    </li>
                    <li data-aos="fade-up" data-aos-duration={1500}>
                      <i className="fas fa-hand-point-right" />
                      Medical infrastructure of the university &amp; its
                      affiliation with nearby health systems should be another
                      point of consideration.{" "}
                    </li>
                    <li data-aos="fade-up" data-aos-duration={2500}>
                      <i className="fas fa-hand-point-right" />
                      University must not be very far away from International
                      airports.{" "}
                    </li>
                    <li data-aos="fade-up" data-aos-duration={3000}>
                      <i className="fas fa-hand-point-right" />
                      The country you are opting should preferably have
                      <br /> friendly relations with India.
                    </li>
                    <li data-aos="fade-up" data-aos-duration={3000}>
                      <i className="fas fa-hand-point-right" />
                      It should be a peaceful country with a <br />
                      progressive social political atmosphere.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="policies-img">
              <img src=" images/policy-img.png" alt="girl-img" />
            </div>
          </div>
        </section>
        {/* policies section ends here */})
      </div>
      <Footer />
    </>
  );
}
