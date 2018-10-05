import React, { Component } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import WhyRedfin from "./components/WhyRedfin/WhyRedfin";
import Consult from "./components/Consult/Consult";
import MarketSections from "./components/MarketSections/MarketSections";
import CitiesSection from "./components/CitiesSection/CitiesSection";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideMenu />
        <NavBar />
        <SearchBar />
        <WhyRedfin />
        <Consult />
        <MarketSections />
        <CitiesSection />
      </div>
    );
  }
}

export default App;
