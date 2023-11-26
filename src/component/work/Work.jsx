import React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import "./work.css";
import Grid from "@mui/material/Grid";
const Work = () => {
  const cardContent = [
    {
      name: "Ecommerce (MERN Stack)",
      link: "https://hermes-e-commerce.netlify.app/home",
      imageSrc: "/WORK/hermres-ecommercce.png",
      textColor: "#FF0303",
      detail:
        "This project was created using MERN Stack.Here user  can login/Signup.And buy product available in the app.Here all the cord operation is performed like Delete,put,post & get",
    },
    {
      name: "Social Media (MERN Stack)",
      link: "hhttps://hermes-socailnetwork.netlify.app/log",
      imageSrc: "/WORK/social-network.png",
      textColor: "#FF0303",
      detail:
        "This project was created using MERN Stack.Here user can login/Signup.User can post the thought and like and see others User post as well.",
    },
  ];

  return (
    <Div style={{ height: "100vh" }} id="work">
      <div style={{ color: "#F4EAE0", marginBottom: "2rem" }}>
        <p style={{ fontSize: "40px", fontWeight: "700" }}> My Work</p>
        <h3>During MY learning phase I have create website like</h3>
      </div>

      {/* //! card  */}
      <Box
        sx={{
          display: "flex",
          gap: "4rem",
          flexDirection: "column",
        }}
      >
        {cardContent.map((item, index) => {
          return (
            <a
              href={item.link}
              target="_blank"
              style={{ textDecoration: "none", color: "#F4EAE0" }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "3rem",
                }}
              >
                <div className="container-work">
                  <img src={item.imageSrc} className="img-work " />
                  <div className="overlay">
                    <div className="text-work">{item.name}</div>
                  </div>
                </div>
                <Box
                  sx={{
                    width: { xs: "200px", sm: "300px" },
                    height: "100px",
                    fontSize: { xs: "15px", md: "18px" },
                    lineHeight: { xs: "", sm: "2rem" },
                  }}
                >
                  <p>{item.detail}</p>
                </Box>
              </Box>
            </a>
          );
        })}
      </Box>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export default Work;
