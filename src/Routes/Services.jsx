import React from "react";
import Navbar from "../components/Nabar";
import Hero from "../components/Hero";
import AboutImg from "../assets/images/bn-4.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

const Services = () => {
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
        title="Services"
        url="/"
        buttonName="Travel plan"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
};

export default Services;
