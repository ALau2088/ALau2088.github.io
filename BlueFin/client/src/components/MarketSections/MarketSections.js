import React, { Component } from "react";
import Slider from "./Slider";
import "./MarketSections.css";

class MarketSections extends Component {
  render() {
    return (
      <div className="MarketSections">
        <div className="Slider1">
          <figure>
            <img src="./Images1/1.png" alt="Images1"/>
            <img src="./Images1/2.png" alt="Images2"/>
            <img src="./Images1/3.png" alt="Images3"/>
          </figure>
        </div>
        <Slider id="sliderStatus"/>
        <div className="Slider2" />
      </div>
    );
  }
}

export default MarketSections;
