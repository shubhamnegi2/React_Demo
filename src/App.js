import "../node_modules/font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./scss/header-footer.css";
// import "./scss/application-form.css";
// import "./scss/become-our-partner.css";
// import "./scss/crimean-federal-university.css";
// import "./scss/currency-convertor.css";
// import "./scss/director-message.css";

// import "./scss/mbbs-in-russia.css";
// import "./scss/partner-login.css";
// import "./scss/services.css";
// import "./scss/student-login.css";
// import "./scss/terms-and-condition.css";

import { Route, Routes } from "react-router-dom";
import $ from "jquery";
import { useEffect } from "react";
import NavchetanaEducation from "./NavchetanaEducation";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import Armenia from "./Armenia";
import Bangladesh from "./Bangladesh";
import Belarus from "./Belarus";
import China from "./China";

function App() {
  useEffect(() => {
    $(function () {
      $("head").append(
        $('<link rel="stylesheet" type="text/css" />').attr(
          "href",
          "http://example.com/example.css"
        )
      );

      var windowWidth = $(window).width();
      // console.log(windowWidth);

      if (windowWidth > 870) {
        $(window).scroll(function (event) {
          var scroll = $(window).scrollTop();
          //console.log(scroll);
          if (scroll >= 38) {
            $("header").css({
              top: "0px",
            });
          } else {
            $("header").css({
              top: "38px",
            });
          }
        });
      }
      if (windowWidth <= 870) {
        $(window).scroll(function (event) {
          var scroll = $(window).scrollTop();
          //console.log(scroll);
          if (scroll >= 38) {
            $("header").css({
              top: "0px",
            });
          } else {
            $("header").css({
              top: "38px",
            });
          }
        });
      }
      if (windowWidth <= 862) {
        $(window).scroll(function (event) {
          var scroll = $(window).scrollTop();
          //console.log(scroll);
          if (scroll >= 38) {
            $("header").css({
              top: "0px",
            });
          } else {
            $("header").css({
              top: "38px",
            });
          }
        });
      }
      if (windowWidth <= 767) {
        $(window).scroll(function (event) {
          var scroll = $(window).scrollTop();
          //console.log(scroll);
          if (scroll >= 38) {
            $("header").css({
              top: "0px",
            });
          } else {
            $("header").css({
              top: "75px",
            });
          }
        });
      }
      if (windowWidth <= 516) {
        $(window).scroll(function (event) {
          var scroll = $(window).scrollTop();
          //console.log(scroll);
          if (scroll >= 38) {
            $("header").css({
              top: "0px",
            });
          } else {
            $("header").css({
              top: "38px",
            });
          }
        });
      }
      if (windowWidth <= 377) {
        $(window).scroll(function (event) {
          var scroll = $(window).scrollTop();
          //console.log(scroll);
          if (scroll >= 38) {
            $("header").css({
              top: "0px",
            });
          } else {
            $("header").css({
              top: "38px",
            });
          }
        });
      }
    });
  });
  return (
    <>
      <Routes>
        <Route exact path="/" element={<NavchetanaEducation />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Gallery" element={<Gallery />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/Armenia" element={<Armenia />} />
        <Route exact path="/Bangladesh" element={<Bangladesh />} />
        <Route exact path="/Belarus" element={<Belarus />} />
        <Route exact path="/China" element={<China />} />
      </Routes>
    </>
  );
}

export default App;
