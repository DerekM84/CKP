import React from "react";
import "./Sidebar.css";

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
          <button className="sidebar-button">Home </button>
          <button className="sidebar-button">Tuition </button>
          <button className="sidebar-button">Schedule </button>
          <button className="sidebar-button">Staff </button>
          <button className="sidebar-button">Mission </button>
        </div>
        <div className="sidebar-bottom">
          <p>Informational Text</p>
          <p>Tel: 480 659-5511</p>
          <p>info@curiouskidspreschoolaz.com; ‎</p>
        
        </div>
      </div>
    );
  }
}

export default Sidebar;
