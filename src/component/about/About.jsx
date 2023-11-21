import React from "react";
// import styled from "styled-components";
import Box from "@mui/material/Box";
import "./about.css";
const About = () => {
  const polldata = [
    {
      id: 1,
      pollName: "HTML/CSS",
      imageUrl: "/about/htmlcss.png",
    },
    {
      id: 2,
      pollName: "Bootstrap/SCSS",
      imageUrl: "/about/bootstrapscss.png",
    },

    {
      id: 3,
      pollName: "J-query",
      imageUrl: "/about/jquery.png",
    },
    {
      id: 4,
      pollName: "MERN Stack",
      imageUrl: "/about/mernstack.png",
    },
  ];
  //todo after in poll
  return (
    <Box id="about">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          // width: "100vh",
        }}
      >
        <div
          style={{
            color: "#F05941",
          }}
        >
          <p style={{ fontSize: "40px" }}>I am a Full-Stack Developer</p>
          <h3>I am proficient in skill below </h3>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "3rem",
          }}
        >
          {polldata?.map((item, index) => {
            return (
              <div>
                <div className="container">
                  <img
                    src={item.imageUrl}
                    className="image"
                    style={{
                      width: "300px ",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="overlay">
                    <div className="text">{item.pollName}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
};

// const Poll = styled.div`
//   width: 100%;
//   height: 1rem;
//   // border: 1px red solid;
//   background: #272829;
//   border-radius: 30px;
// `;

export default About;
