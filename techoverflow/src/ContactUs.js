import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./scss/contact-us.css";
export default function ContactUs() {
  return (
    <>
      <Header />
      <div>
        <section className="contact-us">
          <div className="container">
            <h2>Contact Us</h2>
            <form action="">
              <div className="row">
                <div className="col-lg-6">
                  <div className="name-wrapper">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name" className="name-error error">
                      error
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="phone-wrapper">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Your phone"
                    />
                    <label htmlFor="phone" className="phone-error error">
                      error
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="email-wrapper">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Your email"
                    />
                    <label htmlFor="email" className="email-error error">
                      error
                    </label>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="city-wrapper">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Your city"
                    />
                    <label htmlFor="city" className="city-error error">
                      error
                    </label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="message-wrapper">
                    <textarea
                      name="message"
                      id="message"
                      cols={30}
                      rows={10}
                      placeholder="Anything you want to ask"
                      defaultValue={""}
                    />
                    <label htmlFor="message" className="message-error error">
                      error
                    </label>
                  </div>
                </div>
                <div className="col-sm-12 ">
                  <div className="submit-button text-center">
                    <button type="submit">APPLY NOW</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
