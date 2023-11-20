import React from "react";

import Navbar from "../component/Navbar/Navbar";
import Home from "../component/home/Home";
import About from "../component/about/About";
import Work from "../component/work/Work";
import Contact from "../component/contact/Contact";

const Mainpages = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      {/* <Contact /> */}
    </>
  );
};

export default Mainpages;
