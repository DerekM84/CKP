import React, { Component } from "react";
import "./Splash.css";
import Sidebar from "../Components/Sidebar";

class Splash extends Component {
  state = {
    hidden: false
  };

  render() {

    return (
    <div>
        <Sidebar />
    </div>
    )
  }
}

export default Splash;
