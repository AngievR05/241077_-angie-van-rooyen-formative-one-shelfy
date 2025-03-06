import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for active page styling
import logo from "../assets/sidebar-icons/Logo 1.png";
import homeIcon from "../assets/sidebar-icons/home-1-svgrepo-com.svg";
import comparisonIcon from "../assets/sidebar-icons/code-laptop-svgrepo-com.svg";
import timelineIcon from "../assets/sidebar-icons/bar-chart-4-svgrepo-com.svg";
import backIcon from "../assets/sidebar-icons/logout-svgrepo-com.svg";
import "../css/sidebar.css"; // Ensure you have this file

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo-container">
        <img src={logo} alt="Logo" className="sidebar-logo" />
      </div>

      <nav className="sidebar">
        {/* Navigation Icons */}
        <ul className="sidebar-menu">
          <li>
            <NavLink
              to="/dashboard"
              activeClassName="active" // Adds "active" class to the current page
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

        {/* Divider Line */}
        <div className="sidebar-divider"></div>

        {/* Logout Button */}
        <button className="sidebar-logout">
          <img src={backIcon} alt="Logout" />
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
