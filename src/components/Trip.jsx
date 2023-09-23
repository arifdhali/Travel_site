import React from "react";
import TripData from "./TripData";
import "./Trip.css";

import Trip_Img_1 from "../assets/images/mountain5.jpg";
import Trip_Img_2 from "../assets/images/mountain2.jpg";
import Trip_Img_3 from "../assets/images/mountain3.jpg";

const Trip = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="sub_heading">Elixir & Enigma</h2>
      <p className="sub_para">
        Meaning: This name suggests that during the day, your coffee shop
        provides the perfect pick-me-up, like an elixir, while at night, it
        transforms into a mysterious and enchanting bar, where patrons can
        discover hidden delights and unravel their own enigmas.
      </p>
      <div className="trip-card row gy-5">
        <div className="col-lg-4 col-md-6">
          <TripData
            img={Trip_Img_1}
            heading="Flowers time"
            desc="Effective time management is crucial for maximizing productivity in both personal and professional life. When you manage your time efficiently, you can accomplish more tasks and achieve your goals more effectively."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <TripData
            img={Trip_Img_2}
            heading="Nature of beauty"
            desc="Effective time management is crucial for maximizing productivity in both personal and professional life. When you manage your time efficiently, you can accomplish more tasks and achieve your goals more effectively."
          />
        </div>
        <div className="col-lg-4 col-md-6">
          <TripData
            img={Trip_Img_3}
            heading="Happy children day"
            desc="Effective time management is crucial for maximizing productivity in both personal and professional life. When you manage your time efficiently, you can accomplish more tasks and achieve your goals more effectively."
          />
        </div>
      </div>
    </div>
  );
};

export default Trip;
