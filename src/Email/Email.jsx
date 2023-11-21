import React from "react";

const Email = () => {
  return (
    <div
      style={{
        position: "absolute",
        // bottom: "0%",
        right: "0%",
        left: "0%",
        height: "2rem",
        background: "#F4EAE0",
        textAlign: "center",
        color: "black",
      }}
    >
      Email :
      <a href="mailto:rohanshrestha6655@gmail.com">
        {" "}
        rohanshrestha6655@gmail.com{" "}
      </a>{" "}
    </div>
  );
};

export default Email;
