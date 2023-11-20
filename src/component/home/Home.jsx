import React, { useEffect } from "react";
import Typed from "typed.js";
import "./home.css";
import styled from "styled-components";
import Contact from "../contact/Contact";
const Home = () => {
  useEffect(() => {
    // Create a new instance of Typed.js
    const options = {
      strings: ["Web designer", "MERN Stack developer"],
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      loop: true,
    };

    const typed = new Typed("#typed-text", options);

    // Clean up the Typed.js instance on component unmount
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div className="home-body">
        <div style={{ display: "flex", gap: "2rem" }}>
          <div className="home-image"></div>

          <div style={{ width: "400px" }}>
            <h1>
              Hello! My name is <br />
              <span>Rohan Shrestha .</span>
              <br />
              And, I am a <br />
              <Span id="typed-text"></Span>
            </h1>
          </div>
        </div>
        <div style={{ marginTop: "3rem" }}>
          <Contact />
        </div>
      </div>
    </>
  );
};

const Span = styled.span`
  color: #f05941;
`;
export default Home;
