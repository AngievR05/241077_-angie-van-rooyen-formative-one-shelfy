import React from "react";
import Sidebar from "../components/Sidebar"; 
// import "../css/timeline.css"; 

const Timeline = () => {
  return (
    <div className="timeline">
      <Sidebar />

      <div className="main-content">
        <h2>Timeline Page</h2>
        <p>This is where your timeline data will appear.</p>
      </div>
    </div>
  );
};

export default Timeline;
