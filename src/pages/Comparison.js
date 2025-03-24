import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/comparison.css";
import RatingsChart from "../components/RatingsChart";
import PricePieChart from "../components/PriceChart";
import CombinedDataChart from "../components/CombinedDataChart";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

const API_KEY = "AIzaSyA7mXKt4iqz0avsa48GNy4_Bdv__8sRuWs"; 

const ComparisonPage = () => {
  const [book1, setBook1] = useState(null);
  const [book2, setBook2] = useState(null);
  const [searchTerm1, setSearchTerm1] = useState("");
  const [searchTerm2, setSearchTerm2] = useState("");
  const [filteredBooks1, setFilteredBooks1] = useState([]);
  const [filteredBooks2, setFilteredBooks2] = useState([]);

  // Fetch books from Google Books API
  const fetchBooks = async (searchTerm, setFilteredBooks) => {
    if (!searchTerm.trim()) {
      setFilteredBooks([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}&key=${API_KEY}&maxResults=5`
      );

      const books = response.data.items?.map((item) => ({
        id: item.id,
        title: item.volumeInfo?.title || "Unknown Title",
        author: item.volumeInfo?.authors?.join(", ") || "Unknown Author",
        image: item.volumeInfo?.imageLinks?.thumbnail || "https://via.placeholder.com/128x200",
        pages: item.volumeInfo?.pageCount || "Unknown",
        rating: item.volumeInfo?.averageRating || "No Rating",
        price: item.saleInfo?.listPrice?.amount || "N/A",
      })) || [];

      setFilteredBooks(books);
    } catch (error) {
      console.error("Error fetching books:", error);
      setFilteredBooks([]); // Avoids UI crashes if API fails
    }
  };

  useEffect(() => {
    fetchBooks(searchTerm1, setFilteredBooks1);
  }, [searchTerm1]);

  useEffect(() => {
    fetchBooks(searchTerm2, setFilteredBooks2);
  }, [searchTerm2]);

  // Reset book selection
  const resetSelection = () => {
    setBook1(null);
    setBook2(null);
    setSearchTerm1("");
    setSearchTerm2("");
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <header className="header">
          <h1>Book Comparison</h1>
          <SearchBar />
        </header>

        <section className="book-selection">
          <div className="selection-header">
            <h2>Select Your Books</h2>
            <button onClick={resetSelection}>Reset Books</button>
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
              />

              {!book1 && searchTerm1 && filteredBooks1.length > 0 && (
                <div className="book-list">
                  {filteredBooks1.map((book) => (
                    <div key={book.id} className="book-item" onClick={() => setBook1(book)}>
                      <p>{book.title}</p>
                      <p>by {book.author}</p>
                    </div>
                  ))}
                </div>
              )}

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
              />

              {!book2 && searchTerm2 && filteredBooks2.length > 0 && (
                <div className="book-list">
                  {filteredBooks2.map((book) => (
                    <div key={book.id} className="book-item" onClick={() => setBook2(book)}>
                      <p>{book.title}</p>
                      <p>by {book.author}</p>
                    </div>
                  ))}
                </div>
              )}

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
              <div className="chart-containers">
                <h3>Ratings</h3>
                <RatingsChart book1={book1} book2={book2} />
              </div>

              <div className="chart-containers">
                <h3>Price Distribution</h3>
                <PricePieChart books={[book1, book2]} />
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

        <Footer />
      </div>
    </div>
  );
};

export default ComparisonPage;
