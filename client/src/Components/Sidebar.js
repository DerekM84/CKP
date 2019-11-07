import React from "react";
import "./Sidebar.css";
import "./Sidebar-media.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sidebar extends React.Component {
  state = {
    open: true
  };
  render() {
    return (
      <div className="sidebar-container">
        <div className="sidebar-contact-wrap-mobile">
          <div className="sidebar-contact-container-mobile">
            <p>
              <a href="mailto:info@curiouskidspreschoolaz.com"><i class="fas fa-envelope"></i>  Email Us</a>‎
            </p>
            <p>
              <a href="tel:480-659-5511"><i class="fas fa-phone"></i>  480-659-5511</a>
            </p>
          </div>
        </div>

        <div className="sidebar-top">
          <div className="sidebar-logo-tile">
            <div className="sidebar-logo-wrap">
              <img className="sidebar-logo" src="/images/CKPLogo.jpg" />
              <div className="shadow"></div>
            </div>
          </div>
        </div>

        <div className="sidebar-middle">
          <Link className="sidebar-link" to="/home">
            <button className="sidebar-button">
              <p>MAIN</p>{" "}
            </button>
          </Link>
          <Link className="sidebar-link" to="/curriculum">
            <button className="sidebar-button">
              <p>CURRICULUM</p>{" "}
            </button>
          </Link>
          <Link className="sidebar-link" to="/schedule">
            <button className="sidebar-button">
              <p>SCHEDULE</p>
            </button>
          </Link>
          <Link className="sidebar-link" to="/resources">
            <button className="sidebar-button">
              <p>RESOURCES</p>{" "}
            </button>
          </Link>
          {/* <Link className="sidebar-link" to="/home"><button className="sidebar-button">Other </button></Link> */}
        </div>
        <div className="sidebar-bottom-wrap">
          <div className="sidebar-bottom-container">
            <h1>
              <a href="mailto:info@curiouskidspreschoolaz.com"><i class="fas fa-envelope"></i> Email Us</a>
            </h1>
            <p>info@curiouskidspreschoolaz.com ‎</p>
            <p><i class="fas fa-phone"></i> 480-659-5511</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
