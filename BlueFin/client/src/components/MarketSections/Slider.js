import React, { Component } from "react";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50
    };
  }
  sliderChange = value => {
    this.setState({
      value:value
    })
 
  }
  /*
  sliderChange(val){
    document.getElementById("sliderStatus").innerHTML = val;   
  };
  */

  render(){
    const {value} = this.state
    return (
      <div className="Savings">
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          step={10}
          onChange={this.sliderChange}           
        />
        <br />
        Slider Value=
        <span id="sliderStatus">50</span>
      </div>
    );
  }
}

export default Slider;