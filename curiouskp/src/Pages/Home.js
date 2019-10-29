import React, { Component } from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar";
import Slideshow from "../Components/Carousel";

class Home extends Component {
  state = {
    hidden: false
  };

  render() {

    return (
        
    <div className="home-body">
        {/* <Sidebar /> */}
        <Slideshow />
    </div>
    )
  }
}

export default Home;
