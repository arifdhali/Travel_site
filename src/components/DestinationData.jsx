import React from "react";
import { Component } from "react";
import "./Destination.css";


class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="col-lg-5">
          <div className="des-text">
            <h3>{this.props.heading}</h3>
            <p>{this.props.text}</p>
          </div>
        </div>
        <div className="imges col-lg-7 ">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img src={this.props.img1} alt="img" />
            </div>
            <div className="col-md-6 margin_t">
              <img src={this.props.img2} alt="img" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DestinationData;
