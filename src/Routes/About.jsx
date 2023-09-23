import React from "react";
import Navbar from "../components/Nabar";
import Hero from "../components/Hero";
import AboutImg from "../assets/images/bn-3.jpg";
import Trip from "../components/Trip";

const About = () => {
  return (
    <>
      <header>
        <div className="container-xl">
          <Navbar />
        </div>
      </header>
      <Hero
        cName="hero_inner"
        heroimg={AboutImg}
        title="About"
        url="/"
        buttonName="Travel plan"
        btnClass="hide"
      />
      <Trip />
    </>
  );
};

export default About;
