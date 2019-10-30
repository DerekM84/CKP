import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";


class Sidebar extends React.Component {
  state = {
    open: true
  };
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-top">
          <div className="sidebar-logo-wrap">
            <img className="sidebar-logo" src="/images/CKPLogo.jpg" />
          </div>
        </div>
        <div className="sidebar-middle">
          <Link className="sidebar-link" to="/home"><button className="sidebar-button">Main </button></Link>
          <Link className="sidebar-link" to="/schedule"><button className="sidebar-button">Schedule </button></Link>
          <Link className="sidebar-link" to="/curriculum"><button className="sidebar-button">Curriculum </button></Link>
          <Link className="sidebar-link" to="/resources"><button className="sidebar-button">Resources </button></Link>
          {/* <Link className="sidebar-link" to="/home"><button className="sidebar-button">Other </button></Link> */}
        </div>
        <div className="sidebar-bottom">
          <h1>Contact Us</h1>
          <p>Informational Text</p>
          <p>Tel: 480 659-5511</p>
          <p>info@curiouskidspreschoolaz.com ‎</p>
        
        </div>
      </div>
    );
  }
}

export default Sidebar;
