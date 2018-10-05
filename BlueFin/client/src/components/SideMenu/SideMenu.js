import React, { Component } from "react";
import "./SideMenu.css";

class SideMenu extends Component {
  /*  constructor(props) {
    super(props);
    this.openSlideMenu = this.openSlideMenu(this).bind;
  }
  openSlideMenu() {
    document.getElementById("Menu").style.width = "250px";
  }
*/
  render() {
    return (
      <div className="SideMenu" onToggle={this.openSlideMenu}>
        <div id="Menu" className="Menu">
          <a href="" className="btn-close">
            &times;
          </a>
          <a href="">Buy</a>
          <a href="">Sell</a>
          <a href="">Real Estate Agents</a>
          <a href="">Sign Up</a>
        </div>
        <span className="open-slide">
          <a href="">
            <svg width="30" height="30">
              <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" />
              <path d="M0,14 30,14" stroke="#fff" strokeWidth="5" />
              <path d="M0,23 30,23" stroke="#fff" strokeWidth="5" />
            </svg>
          </a>
        </span>
      </div>
    );
  }
}

export default SideMenu;
