import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="social-icons">
      {/* <a className="social-icon social-icon--codepen">
        <i className="fa fa-codepen"></i>
        <div className="tooltip">Codepen</div>
      </a> */}
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
      <a className="social-icon social-icon--linkedin">
        <i className="fa fa-linkedin"></i>
        <div className="tooltip">LinkedIn</div>
      </a>
      <a className="social-icon social-icon--facebook">
        <i className="fa fa-facebook"></i>
        <div className="tooltip">Facebook</div>
      </a>
    </div>
  );
};

export default Contact;
