import React from "react";
import Navbar from "../components/Nabar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <header>
        <div className="container-xl">
          <Navbar />
        </div>
      </header>
      <Hero
        cName="hero"
        heroimg="https://images.unsplash.com/photo-1682687220866-c856f566f1bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Making the Most of Your Adventures"
        text="Proven Travel Hacks for a Seamless Adventure"
        url="/"
        buttonName="Travel plan"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
};

export default Home;
