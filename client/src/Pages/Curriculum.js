import React, { Component } from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar";
import Slideshow from "../Components/Carousel";
import Curriculumtabs from "../Components/Tabs/Curriculumtabs";
import { Container, Row, Col } from 'reactstrap';

class Curriculum extends Component {
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

    <Slideshow />

  </div>

  <div className="content-section">

    <Curriculumtabs />

  </div>

</div>

      </div>
    );
  }
}

export default Curriculum;
