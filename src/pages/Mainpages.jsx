import React from "react";

import Navbar from "../component/Navbar/Navbar";
import Home from "../component/home/Home";
import About from "../component/about/About";
import Work from "../component/work/Work";
import Contact from "../component/contact/Contact";
import Email from "../Email/Email";

const Mainpages = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Email />
      {/* <Contact /> */}
    </>
  );
};

export default Mainpages;
