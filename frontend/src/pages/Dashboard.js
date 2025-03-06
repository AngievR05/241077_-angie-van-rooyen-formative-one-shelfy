import React from "react";
import Header from "../components/Header";
import "../css/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="main-content">
        {/* Header */}
        <Header />
        
        <div className="dashboard-welcome">
          <h2>Welcome to the Dashboard</h2>
          <p>This is where book data visualization will appear.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
