import React from "react";

const TripData = (props) => {
  return (
    <div className="card_c ">
      <div className="card-img">
        <img src={props.img} className="img-fluid" alt="" />
      </div>
      <div className="card-desc">
        <h4>{props.heading}</h4>
        <p className="sub_para">{props.desc}</p>
      </div>
    </div>
  );
};

export default TripData;
