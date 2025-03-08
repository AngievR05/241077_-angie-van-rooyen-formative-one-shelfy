import React, { useState } from "react";
import "../css/comparison.css";
import RatingsChart from "../components/RatingsChart";
import FormatsChart from "../components/FormatsChart";
import CombinedDataChart from "../components/CombinedDataChart";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

// Import static book data
import { books } from "../assets/data/books";

const ComparisonPage = () => {
  const [book1, setBook1] = useState(null); // Book 1 selection
  const [book2, setBook2] = useState(null); // Book 2 selection
  const [searchTerm1, setSearchTerm1] = useState(""); // Search term for book 1
  const [searchTerm2, setSearchTerm2] = useState(""); // Search term for book 2

  // Filter books based on search term
  const filteredBooks1 = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm1.toLowerCase())
  );

  const filteredBooks2 = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm2.toLowerCase())
  );

  // Handle book selection for book 1
  const handleBook1Select = (book) => {
    setBook1(book);
    setSearchTerm1(book.title); // Auto-fill search with selected book title
  };

  // Handle book selection for book 2
  const handleBook2Select = (book) => {
    setBook2(book);
    setSearchTerm2(book.title); // Auto-fill search with selected book title
  };

  return (
    <div className="dashboard">
      {/* Sidebar component */}
      <Sidebar />
      
      <div className="main-content">
      <header className="header">
        <h1>Book Comparison</h1>
        
        {/* SearchBar component */}
        <SearchBar />
      </header>
        
        <section className="book-selection">
          {/* Book 1 Selection */}
          <div className="book-card">
            <h2>Select Book 1</h2>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm1}
              onChange={(e) => setSearchTerm1(e.target.value)}
            />
            <div className="book-list">
              {filteredBooks1.map((book) => (
                <div
                  key={book.id}
                  className="book-item"
                  onClick={() => handleBook1Select(book)}
                >
                  <p>{book.title}</p>
                  <p>by {book.author}</p>
                </div>
              ))}
            </div>
            {book1 && (
              <div className="book-details">
                <p>Title: {book1.title}</p>
                <p>by {book1.author}</p>
                <p>Pages: {book1.pages}</p>
                <p>Rating: {book1.rating}</p>
              </div>
            )}
          </div>

          {/* Book 2 Selection */}
          <div className="book-card">
            <h2>Select Book 2</h2>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm2}
              onChange={(e) => setSearchTerm2(e.target.value)}
            />
            <div className="book-list">
              {filteredBooks2.map((book) => (
                <div
                  key={book.id}
                  className="book-item"
                  onClick={() => handleBook2Select(book)}
                >
                  <p>{book.title}</p>
                  <p>by {book.author}</p>
                </div>
              ))}
            </div>
            {book2 && (
              <div className="book-details">
                <p>Title: {book2.title}</p>
                <p>by {book2.author}</p>
                <p>Pages: {book2.pages}</p>
                <p>Rating: {book2.rating}</p>
              </div>
            )}
          </div>
        </section>
          
            <hr />

            <section className="data-visualization">
              <h2>Data Visualization</h2>
              <div className="chart-wrapper">
              <div className="chart-container">
                <h3>Ratings</h3>
                  <RatingsChart book1={book1} book2={book2} />
               </div>
              <div className="chart-container">
                <h3>Book Formats Availability</h3>
                <FormatsChart book1={book1} book2={book2} />
              </div>
              </div>
            </section>


        <hr />

        <section className="combined-data">
          <h3>All Data Combined</h3>
          <CombinedDataChart book1={book1} book2={book2} />
        </section>

          <hr />

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default ComparisonPage;
