import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Comparison from './pages/Comparison';
import Timeline from './pages/Timeline';
import NotFound from './pages/NotFound'; // Optional: If you want to handle unmatched routes.

function App() {
  return (
    <Router basename="/AngievR05/241077_-angie-van-rooyen-formative-one-shelf">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/timeline" element={<Timeline />} />
        {/* Optional: Handle unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;

