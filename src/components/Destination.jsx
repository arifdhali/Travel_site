import React from "react";
import "./Destination.css";
import Mountain1 from "../assets/images/mountain1.jpg";
import Mountain2 from "../assets/images/mountain2.jpg";
import Mountain3 from "../assets/images/mountain3.jpg";
import Mountain4 from "../assets/images/mountain4.jpeg";

import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="container">
      <div className="destination p-4">
        <h2 className="sub_heading">Discover Exotic Destinations</h2>
        <p className="sub_para">
          From the serene beaches of Bali to the bustling streets of Tokyo,
          there are countless exotic destinations waiting to be explored.
        </p>

        <DestinationData
          className="first-des row align-items-center margin_top"
          heading="Culinary Journeys"
          text="Travel isn't just about seeing new places; it's also about
              savoring new flavors. Food plays a central role in exploring the
              world's cultures. Indulge in the rich spices of India, savor the
              fine wines of Bordeaux, or feast on sushi in Japan. Every dish
              tells a story, and every meal is an adventure"
          img1={Mountain1}
          img2={Mountain2}
        />
        <DestinationData
          className="first-des-reverse row align-items-center margin_top"
          heading="Culinary Journeys"
          text="Travel isn't just about seeing new places; it's also about
              savoring new flavors. Food plays a central role in exploring the
              world's cultures. Indulge in the rich spices of India, savor the
              fine wines of Bordeaux, or feast on sushi in Japan. Every dish
              tells a story, and every meal is an adventure"
          img1={Mountain3}
          img2={Mountain4}
        />
      </div>
    </div>
  );
};

export default Destination;
