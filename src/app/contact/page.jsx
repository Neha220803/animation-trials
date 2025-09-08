import React from "react";
import Spline from "@splinetool/react-spline";
import "./styles.css";
import TimelineStickyComp from "@/components/sticky-comps/TimelineSticky";

const ContactPage = () => {
  return (
    <div className=" h-screen">
      <div className="text-7xl text-center w-full"> Contact Us</div>

      <Spline scene="https://prod.spline.design/6vjHTAHwot5s9u2s/scene.splinecode" />
      <TimelineStickyComp />
    </div>
  );
};

export default ContactPage;
