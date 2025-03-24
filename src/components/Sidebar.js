import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import logo from "../assets/sidebar-icons/Logo 1.png";
import homeIcon from "../assets/sidebar-icons/home-1-svgrepo-com.svg";
import comparisonIcon from "../assets/sidebar-icons/code-laptop-svgrepo-com.svg";
import timelineIcon from "../assets/sidebar-icons/bar-chart-4-svgrepo-com.svg";
import backIcon from "../assets/sidebar-icons/logout-svgrepo-com.svg";
import "../css/sidebar.css";

const Sidebar = () => {

  const navigate = useNavigate();

  // Function to go back to the previous page
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo-container">
      <NavLink to="/dashboard">
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </NavLink>
      </div>

      <nav className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <NavLink
              to="/dashboard"
              activeClassName="active" 
            >
              <img src={homeIcon} alt="Home" className="sidebar-icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/comparison"
              activeClassName="active"
            >
              <img src={comparisonIcon} alt="Comparison" className="sidebar-icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/timeline"
              activeClassName="active"
            >
              <img src={timelineIcon} alt="Timeline" className="sidebar-icon" />
            </NavLink>
          </li>
        </ul>

        <div className="sidebar-divider"></div>

        <button className="sidebar-logout" onClick={handleGoBack}>
          <img src={backIcon} alt="Go Back" />
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;