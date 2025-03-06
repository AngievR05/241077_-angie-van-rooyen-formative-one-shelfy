// import React from "react";
// import Sidebar from "../components/Sidebar"; // Import Sidebar
// // import "../css/comparison.css"; // Add any page-specific CSS if necessary

// const Comparison = () => {
//   return (
//     <div className="comparison">
//       {/* Sidebar - Render it on this page as well */}
//       <Sidebar />

//       <div className="main-content">
//         <h2>Comparison Page</h2>
//         <p>This is where your comparison data will appear.</p>
//       </div>
//     </div>
//   );
// };

// export default Comparison;


import React, { useState } from 'react';
import books from '../assets/data/books';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Comparison = () => {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [book1, setBook1] = useState(null);
  const [book2, setBook2] = useState(null);

  const handleBookSelection = (book, index) => {
    if (index === 1) {
      setBook1(book);
    } else {
      setBook2(book);
    }
  };

  const resetSelection = () => {
    setBook1(null);
    setBook2(null);
  };

  const comparisonData = {
    rating: [
      { name: book1?.title, rating: book1?.rating },
      { name: book2?.title, rating: book2?.rating },
    ],
    pages: [
      { name: book1?.title, pages: book1?.pages },
      { name: book2?.title, pages: book2?.pages },
    ],
  };

  return (
    <div className="comparison">
      <header className="header">
        <h1>Project Name</h1>
        <input type="text" placeholder="Search books..." className="search-bar" />
      </header>

      <div className="comparison-main">
        <h2>Select Your Books</h2>
        <div>
          <input
            type="text"
            placeholder="Search for Book 1"
            onChange={e => handleBookSelection(books.find(book => book.title.includes(e.target.value)), 1)}
          />
          <input
            type="text"
            placeholder="Search for Book 2"
            onChange={e => handleBookSelection(books.find(book => book.title.includes(e.target.value)), 2)}
          />
          <button onClick={resetSelection}>Reset</button>
        </div>

        {book1 && book2 && (
          <div className="charts">
            <h3>Comparison Charts</h3>
            <div className="chart-container">
              <ResponsiveContainer width="45%" height={300}>
                <BarChart data={comparisonData.rating}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="rating" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>

              <ResponsiveContainer width="45%" height={300}>
                <BarChart data={comparisonData.pages}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="pages" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>

      <footer className="footer">
        <button>Dashboard</button>
        <button>Comparison</button>
        <button>Timeline</button>
        <div>&copy; 2025 All Rights Reserved</div>
      </footer>
    </div>
  );
};

export default Comparison;
