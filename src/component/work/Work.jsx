import React from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import styled from "styled-components";
import "./work.css";
const Work = () => {
  const cardContent = [
    {
      name: "Ecommerce (MERN Stack)",
      link: "https://hermes-e-commerce.netlify.app/home",
      imageSrc: "/WORK/hermres-ecommercce.png",
      textColor: "#FF0303",
    },
    {
      name: "Social Media (MERN Stack)",
      link: "hhttps://hermes-socailnetwork.netlify.app/log",
      imageSrc: "/WORK/social-network.png",
      textColor: "#FF0303",
    },
  ];

  return (
    <Div style={{ height: "100vh" }} id="work">
      <div style={{ color: "#f05941", marginBottom: "2rem" }}>
        <p style={{ fontSize: "40px", fontWeight: "700" }}> My Work</p>
        <h3>During MY learning phase I have create website like</h3>
      </div>

      {/* //! card  */}
      <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
        {cardContent.map((item, index) => {
          return (
            <a href={item.link} target="_blank">
              <Card
                component="li"
                sx={{ width: "300px", flexGrow: 1 }}
                className="card-Hover"
              >
                <CardCover>
                  <img src={item.imageSrc} loading="lazy" alt="" />
                </CardCover>
                <CardContent>
                  <Typography
                    level="body-lg"
                    fontWeight="lg"
                    textColor={item.textColor}
                    mt={{ xs: 12, sm: 18 }}
                  >
                    {item.name}
                  </Typography>
                </CardContent>
              </Card>
            </a>
          );
        })}
      </div>
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
