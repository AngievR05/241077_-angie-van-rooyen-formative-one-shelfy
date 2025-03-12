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

  // Reset book selection
  const resetSelection = () => {
    setBook1(null);
    setBook2(null);
    setSearchTerm1('');
    setSearchTerm2('');
  };
  

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
  <div className="selection-header">
    <h2>Select Your Books</h2>
    <button onClick={resetSelection}>Reset</button>
  </div>

  <div className="book-cards">
    {/* Book 1 Selection */}
<div className="book-card">
  <h3>Select Book 1</h3>
  <input
  type="text"
  placeholder="Search"
  value={searchTerm1}
  onChange={(e) => setSearchTerm1(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && filteredBooks1.length > 0) {
      handleBook1Select(filteredBooks1[0]); // Select first matching book
    }
  }}
/>
  
  {/* ✅ Only show book list when search term exists and no book is selected */}
  {!book1 && searchTerm1 && (
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
  )}

  {/* Show Book Details Only if a Book is Selected */}
  {book1 && (
    <div className="book-details">
      <img src={book1.image} alt={book1.title} className="book-image" />
      <div className="book-info">
        <p className="book-title">{book1.title}</p>
        <p className="book-author">by {book1.author}</p>
        <p className="book-pages">Pages: {book1.pages}</p>
        <p className="book-rating">Rating: {book1.rating}</p>
      </div>
    </div>
  )}
</div>


{/* Book 2 Selection */}
<div className="book-card">
  <h3>Select Book 2</h3>
  <input
  type="text"
  placeholder="Search"
  value={searchTerm2}
  onChange={(e) => setSearchTerm2(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && filteredBooks2.length > 0) {
      handleBook2Select(filteredBooks2[0]); // Select first matching book
    }
  }}
/>
  
  {/* ✅ Only show book list when search term exists and no book is selected */}
  {!book2 && searchTerm2 && (
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
  )}

  {/* Show Book Details Only if a Book is Selected */}
  {book2 && (
    <div className="book-details">
      <img src={book2.image} alt={book2.title} className="book-image" />
      <div className="book-info">
        <p className="book-title">{book2.title}</p>
        <p className="book-author">by {book2.author}</p>
        <p className="book-pages">Pages: {book2.pages}</p>
        <p className="book-rating">Rating: {book2.rating}</p>
      </div>
    </div>
  )}
</div>

  </div>
</section>

          
            <hr />

            <section className="data-visualization">
  <h2>Data Visualization</h2>

  {book1 && book2 ? (
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
  ) : (
    <p>Please select two books to compare data.</p>
  )}
</section>

<hr />

<section className="combined-data">
  <h3>All Data Combined</h3>
  {book1 && book2 ? (
    <CombinedDataChart book1={book1} book2={book2} />
  ) : (
    <p>Select two books to see combined data.</p>
  )}
</section>

          <hr />

        {/* Footer */}
        <Footer />

      </div>
    </div>
  );
};

export default ComparisonPage;
