import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Routes/Home";
import About from "./Routes/About";
import Contact from "./Routes/Contact"
import Services from "./Routes/Services"
import { Route, Routes } from "react-router-dom";





const App = () => {


  return (



    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

      </Routes >


    </>
  );
};

export default App;
