import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Navbar = () => {
  return (
    <Div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        padding: " 2rem",
      }}
    >
      <div>
        <h3>Rohan Shrestha</h3>
      </div>
      <div className="links-navbar">
        <ul style={{ display: "flex", gap: "2rem" }} className="navbar-ui">
          <a href="#about">
            <li>ABOUT</li>
          </a>
          <a href="#work">
            <li>PORTFOLIO</li>
          </a>
          <a href="/pdf/rohanshresthaCV.pdf" target="_blank">
            <li>CV</li>
          </a>
        </ul>
      </div>
    </Div>
  );
};

const Div = styled.div`
  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  // border: 1px solid red;
  background: black;
`;

export default Navbar;
