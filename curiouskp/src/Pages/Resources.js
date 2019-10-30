import React, { Component } from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar";
import Slideshow from "../Components/Carousel";
import Resourcestabs from "../Components/Tabs/Resourcestabs";
import { Container, Row, Col } from 'reactstrap';

class Staff extends Component {
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

    <Resourcestabs />

  </div>

</Col>

      </div>
    );
  }
}

export default Staff;
