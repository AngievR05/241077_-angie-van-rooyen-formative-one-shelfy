import React from "react";
import Sidebar from "../components/Sidebar"; // Import Sidebar
// import "../css/timeline.css"; // Add any page-specific CSS if necessary

const Timeline = () => {
  return (
    <div className="timeline">
      {/* Sidebar - Render it on this page as well */}
      <Sidebar />

      <div className="main-content">
        <h2>Timeline Page</h2>
        <p>This is where your timeline data will appear.</p>
      </div>
    </div>
  );
};

export default Timeline;
