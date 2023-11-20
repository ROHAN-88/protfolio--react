import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div class="social-icons">
      <a class="social-icon social-icon--codepen">
        <i class="fa fa-codepen"></i>
        <div class="tooltip">Codepen</div>
      </a>
      <a class="social-icon social-icon--github">
        <i class="fa fa-github"></i>
        <div class="tooltip">Github</div>
      </a>
      <a class="social-icon social-icon--twitter">
        <i class="fa fa-twitter"></i>
        <div class="tooltip">Twitter</div>
      </a>
      <a class="social-icon social-icon--dribbble">
        <i class="fa fa-dribbble"></i>
        <div class="tooltip">Dribbble</div>
      </a>
      <a class="social-icon social-icon--instagram">
        <i class="fa fa-instagram"></i>
        <div class="tooltip">Instagram</div>
      </a>
      <a class="social-icon social-icon--linkedin">
        <i class="fa fa-linkedin"></i>
        <div class="tooltip">LinkedIn</div>
      </a>
      <a class="social-icon social-icon--facebook">
        <i class="fa fa-facebook"></i>
        <div class="tooltip">Facebook</div>
      </a>
    </div>
  );
};

export default Contact;
