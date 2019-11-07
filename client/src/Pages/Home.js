import React, { Component } from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar";
import Slideshow from "../Components/Carousel";
import Hometabs from "../Components/Tabs/Hometabs";
import { Container, Row, Col } from 'reactstrap';



class Home extends Component {
  state = {
    hidden: false
  };

  render() {
    return (
      <div className="home-body">

      

       <div className="left-column">

        <Sidebar />

       </div>
       

        <div className="right-column">

        <div className="carousel-wrap">

            <Slideshow className="slide-1"/>

          </div>

          <div className="content-section">

            <Hometabs />

            </div>

        </div>
      
     
      </div>
    );
  }
}

export default Home;
