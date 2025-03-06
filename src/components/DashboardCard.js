import React from 'react';

const DashboardCard = ({ book }) => (
  <div className="dashboard-card">
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <p>{book.genre}</p>
    <p>{book.rating}</p>
  </div>
);

export default DashboardCard;