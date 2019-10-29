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
          <Link className="sidebar-link" to="/home"><button className="sidebar-button">Home </button></Link>
          <Link className="sidebar-link" to="/Schedule"><button className="sidebar-button">Schedule </button></Link>
          <Link className="sidebar-link" to="/Tuition"><button className="sidebar-button">Tuition </button></Link>
          <Link className="sidebar-link" to="/Staff"><button className="sidebar-button">Staff </button></Link>
          {/* <Link className="sidebar-link" to="/home"><button className="sidebar-button">Other </button></Link> */}
        </div>
        <div className="sidebar-bottom">
          <p>Informational Text</p>
          <p>Tel: 480 659-5511</p>
          <p>info@curiouskidspreschoolaz.com ‎</p>
        
        </div>
      </div>
    );
  }
}

export default Sidebar;
