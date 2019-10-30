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

      

       <Col className="left-column">

        <Sidebar />

       </Col>
       

        <Col className="right-column">

        <div className="carousel-wrap">

            <Slideshow />

          </div>

          <div className="content-section">

            <Hometabs />

          </div>

        </Col>
      
     
      </div>
    );
  }
}

export default Home;
