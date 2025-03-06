import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Import Sidebar
import Dashboard from "./pages/Dashboard"; // Example page
import Comparison from "./pages/Comparison"; // Example page
import Timeline from "./pages/Timeline"; // Example page
import "./css/sidebar.css"; // Import styles

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar /> {/* Sidebar fixed on the left */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
