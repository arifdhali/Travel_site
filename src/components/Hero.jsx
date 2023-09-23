import React from "react";
import "./Hero.css";

const Hero = (props) => {
  return (
    <section className={props.cName}>
      <img className="heroImg" src={props.heroimg} alt="Hero img" />

      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonName}
        </a>
      </div>
    </section>
  );
};

export default Hero;
