import React from "react";
import Navbar from "../components/Nabar";
import Hero from "../components/Hero";
import AboutImg from "../assets/images/bn-3.jpg";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";

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
      <Aboutus />

      <Footer />
    </>
  );
};

export default About;
