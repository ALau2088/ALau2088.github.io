import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="left-clear ">
          <h1 className="headline ">
            Sell for more, pay as low
            <br /> as a 1% listing fee
          </h1>
          <div className="homeSearch " id="homeSearch ">
            <div className="Tabs ">
              <a href="# ">
                <h2>Find a Home</h2>
              </a>
              <a href="# ">
                <h2>Sell my Home</h2>
              </a>
              <a href="# ">
                <h2>See home estimate</h2>
              </a>
            </div>
            <div className="locationInput ">
              <form className="searchBox ">
                <input
                  type="search "
                  placeholder="City, Address, School, Agent, ZIP "
                  title="City, Address, School, Agent, ZIP "
                />
                <button className="button1 " type="submit ">
                  <svg
                    className="search "
                    //xmlns="http://www.w3.org/2000/svg "
                    //xmlns:svg="http://www.w3.org/2000/svg "
                  >
                    <svg viewBox="0 0 451 451 ">
                      <g className="layer ">
                        <title>Layer 1</title>
                        <g id="svg_1 ">
                          <path
                            d="m447.05,428l-109.6,-109.6c29.4,-33.8 47.2,-77.9 47.2,-126.1c0,-106.1 -86.3,-192.3 -192.3,-192.3c-106.1,0
                  -192.3,86.3 -192.3,192.3s86.3,192.3 192.3,192.3c48.2,0 92.3,-17.8 126.1,-47.2l109.6,109.6c2.6,2.6 6.1,4 9.5,4s6.9,-1.3
                  9.5,-4c5.2,-5.2 5.2,-13.8 0,-19zm-420.1,-235.7c0,-91.2 74.2,-165.3 165.3,-165.3c91.2,0 165.3,74.2 165.3,165.3s-74.1,165.4
                  -165.3,165.4c-91.1,0 -165.3,-74.2 -165.3,-165.4z "
                            id="svg_2 "
                          />
                        </g>
                      </g>
                    </svg>
                  </svg>
                </button>
              </form>
            </div>
          </div>
          <div className="findOutMore ">
            <h2>
              <p>
                <strong>Price your home right with a Redfin Agent</strong>
              </p>
              <br />
              <p>See local buyer demand and get accurate</p>
              <p>pricing data for about half the usual listing fee.</p>
            </h2>
            <br />
            <a href="">
              <button>Find Out More</button>
            </a>
            <div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
