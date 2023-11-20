import React from "react";
import styled from "styled-components";

const About = () => {
  const polldata = [
    {
      id: 1,
      pollName: "HTML/CSS",
      percentage: "90%",
    },
    {
      id: 2,
      pollName: "Bootstrap/SCSS",
      percentage: "70%",
    },
    {
      id: 3,
      pollName: "J-query",
      percentage: "70%",
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
      pollName: "Node.js/Express.js",
      percentage: "50%",
    },
  ];
  return (
    <div id="about">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
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
            <div key={item.id} style={{ marginTop: "1rem" }}>
              <p>{item.percentage}</p>
              <div style={{ display: "flex", gap: "2rem" }}>
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
                <span style={{ width: "7rem", fontSize: "20px" }}>
                  {item.pollName}{" "}
                </span>
              </div>
            </div>
          );
        })}
        {/* <div>//! photo  </div> */}
      </div>
    </div>
  );
};

const Poll = styled.div`
  width: 30rem;
  height: 1rem;
  // border: 1px red solid;
  background: #272829;
  border-radius: 30px;
`;

export default About;
