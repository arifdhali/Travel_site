import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top_ftr d-flex justify-content-between">
          <div>
            <a href="" className="navbar_logo">
              arif
            </a>
            <p>Choose your developer</p>
          </div>
          <div>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-behance"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
