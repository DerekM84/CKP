import React, { Component } from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar";
import Slideshow from "../Components/Carousel";
import Hometabs from "../Components/Hometabs";
class Staff extends Component {
  state = {
    hidden: false
  };

  render() {
    return (
      <div className="home-body">

        <div className="row">


        </div>

          <Sidebar />
  
        <div className="right-column">
          <div className="carousel-wrap">
            <Slideshow />
          </div>
          <div className="content-section">
            <Hometabs />
          </div>
        </div>
      </div>
    );
  }
}

export default Staff;
