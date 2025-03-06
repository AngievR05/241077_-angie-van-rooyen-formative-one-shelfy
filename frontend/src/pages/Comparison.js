import React from "react";
import Sidebar from "../components/Sidebar"; // Import Sidebar
// import "../css/comparison.css"; // Add any page-specific CSS if necessary

const Comparison = () => {
  return (
    <div className="comparison">
      {/* Sidebar - Render it on this page as well */}
      <Sidebar />

      <div className="main-content">
        <h2>Comparison Page</h2>
        <p>This is where your comparison data will appear.</p>
      </div>
    </div>
  );
};

export default Comparison;
