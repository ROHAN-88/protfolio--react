import React from "react";
import Box from "@mui/material/Box";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <div className="social-icons">
          <a
            className="social-icon social-icon--github"
            href="https://github.com/ROHAN-88"
            target="_blank"
          >
            <i className="fa fa-github"></i>
            <div className="tooltip">Github</div>
          </a>
          <a className="social-icon social-icon--twitter">
            <i className="fa fa-twitter"></i>
            <div className="tooltip">Twitter</div>
          </a>
          <a className="social-icon social-icon--dribbble">
            <i className="fa fa-dribbble"></i>
            <div className="tooltip">Dribbble</div>
          </a>
          <a className="social-icon social-icon--instagram">
            <i className="fa fa-instagram"></i>
            <div className="tooltip">Instagram</div>
          </a>
          <a
            className="social-icon social-icon--linkedin"
            href="www.linkedin.com/in/rohan-shrestha23"
          >
            <i className="fa fa-linkedin"></i>
            <div className="tooltip">LinkedIn</div>
          </a>
          <a className="social-icon social-icon--facebook">
            <i className="fa fa-facebook"></i>
            <div className="tooltip">Facebook</div>
          </a>
        </div>
      </Box>

      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
          },
        }}
      >
        <div class="footer-social-icons2">
          <ul class="social-icons2">
            <li>
              <a href="" class="social-icon2">
                {" "}
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="" class="social-icon2">
                {" "}
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            {/* <li>
              <a href="" class="social-icon2">
                {" "}
                <i class="fa fa-rss"></i>
              </a>
            </li> */}
            <li>
              <a href="" class="social-icon2">
                {" "}
                <i class="fa fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="www.linkedin.com/in/rohan-shrestha23"
                class="social-icon2"
              >
                {" "}
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/ROHAN-88" class="social-icon2">
                {" "}
                <i class="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </Box>
    </>
  );
};

export default Contact;
