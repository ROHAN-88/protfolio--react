import React, { useEffect } from "react";
import Typed from "typed.js";
import "./home.css";
import styled from "styled-components";
import Contact from "../contact/Contact";
import { Box } from "@mui/material";
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
      <Box className="home-body">
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
            gap: "4rem",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className="home-image"></Box>

          <Box style={{ width: "400px", textAlign: "center" }}>
            <h1>
              Hello! My name is <br />
              <span>Rohan Shrestha .</span>
              <br />
              And, I am a <br />
              <Span id="typed-text"></Span>
            </h1>
          </Box>
        </Box>
        <Box style={{ marginTop: "3rem" }}>
          <Contact />
        </Box>
      </Box>
    </>
  );
};

const Span = styled.span`
  color: #f05941;
`;
export default Home;
