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
        <div className="btm_ftr row">
          <div className="col-md-3">
            <h3>Projects</h3>

            <ul>
              <li>
                <a href="#">Animation</a>
              </li>
              <li>
                <a href="#">Animation</a>
              </li>
              <li>
                <a href="#">Animation</a>
              </li>
              <li>
                <a href="#">Animation</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Services</h3>

            <ul>
              <li>
                <a href="#">Web development</a>
              </li>
              <li>
                <a href="#">App Development</a>
              </li>
              <li>
                <a href="#">Gsap</a>
              </li>
              <li>
                <a href="#">Animation</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Recent project</h3>

            <ul>
              <li>
                <a href="#">Travel</a>
              </li>
              <li>
                <a href="#">Cuberto</a>
              </li>
              <li>
                <a href="#">Magnum</a>
              </li>
              <li>
                <a href="#">Awards website</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Address</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
              perferendis.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
