import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
const About = () => {
  const polldata = [
    {
      id: 1,
      pollName: "HTML/CSS",
      percentage: "90%",
    },
    {
      id: 2,
      pollName: "Bootstrap",
      percentage: "80%",
    },
    {
      id: 8,
      pollName: "SCSS",
      percentage: "80%",
    },
    {
      id: 3,
      pollName: "J-query",
      percentage: "80%",
    },
    {
      id: 4,
      pollName: "MERN Stack",
      percentage: "60%",
    },
    {
      id: 5,
      pollName: "React",
      percentage: "70%",
    },
    {
      id: 6,
      pollName: "MongoDB",
      percentage: "60%",
    },
    {
      id: 7,
      pollName: "Node.js",
      percentage: "50%",
    },
    {
      id: 8,
      pollName: "Express.js",
      percentage: "50%",
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
        {polldata.map((item, index) => {
          return (
            <Box
              key={item.id}
              sx={{ marginTop: "1rem", width: { xs: "80%", md: "60%" } }}
            >
              <p>{item.percentage}</p>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Poll>
                  <div
                    style={{
                      width: `${item.percentage}`,
                      height: "1rem",

                      // border: "1px red solid",
                      borderRadius: "30px",

                      background: "#D8D9DA",
                    }}
                  ></div>
                </Poll>
                <Box
                  sx={{
                    width: { xs: "7rem", sm: "10rem" },
                    fontSize: { xs: "14px", sm: "19px" },
                  }}
                >
                  {item.pollName}{" "}
                </Box>
              </div>
            </Box>
          );
        })}
        {/* <div>//! photo  </div> */}
      </div>
    </Box>
  );
};

const Poll = styled.div`
  width: 100%;
  height: 1rem;
  // border: 1px red solid;
  background: #272829;
  border-radius: 30px;
`;

export default About;
