import React, { useState } from 'react';
import '../css/dashboardCard.css';

const DashboardCard = ({ book }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="dashboard-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`card-inner ${hovered ? 'flipped' : ''}`}>
        {/* Front Side - Book Spine */}
        <div className="card-front">
          <h3>{book.title}</h3>
        </div>

        {/* Back Side - Expanded View */}
        <div className="card-back">
          <img src={book.image} alt={book.title} className="book-cover" />
          <h3>{book.title}</h3>
          {/* <p>{book.author}</p> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
