import React from "react";
import Navbar from "../components/Nabar";
import Hero from "../components/Hero";
import AboutImg from "../assets/images/bn-2.jpg";
const Contact = () => {
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
        title="Contact"
        url="/"
        buttonName="Travel plan"
        btnClass="hide"
      />
    </>
  );
};

export default Contact;
