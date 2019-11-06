import React, { Component } from "react";
import "./Home.css";
import Sidebar from "../Components/Sidebar";
import Slideshow from "../Components/Carousel";
import Scheduletabs from "../Components/Tabs/Scheduletabs";
import { Container, Row, Col } from 'reactstrap';


class Schedule extends Component {
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

    <Scheduletabs />

  </div>

</div>
      </div>
    );
  }
}

export default Schedule;
