import React, { useState } from "react";
import books from "../assets/data/books";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import GenreSelector from "../components/GenreSelector";
import WelcomeSection from "../components/WelcomeSection";
import BookList from "../components/BookList";
import ChartSection from "../components/ChartSection";
import Footer from "../components/Footer";
import '../css/dashboard.css';

const Dashboard = () => {
  const [selectedGenre, setSelectedGenre] = useState("Fiction");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      book.genre === selectedGenre &&
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ratingData = filteredBooks.map((book) => ({
    name: book.title,
    rating: book.rating,
  }));

  const pageData = filteredBooks.map((book) => ({
    name: book.title,
    pages: book.pages,
  }));

  const colors = ["var(--deep-orange)"];

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <header className="header">
          <h1>Shelfy Dashboard</h1>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </header>

        <div className="main-content">
          <WelcomeSection totalBooks={books.length} />

          <hr />

          <div className="data-shelf">
            <h2>The Data Shelf</h2>
            <div className="data-content">
              <div className="genre-mood-board">
                <h3>Genre Mood Board</h3>
                <p>Explore books by genre! Click on a category to discover top titles.</p>
                <GenreSelector selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
              </div>

              <div className="top-rated">
                <h3>Top-Rated Books</h3>
                <p>Discover the 5 highest-rated books!</p>
                <ol>
                  {filteredBooks.slice(0, 5).map((book) => (
                    <li key={book.id}>{book.title}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          <hr />

          <BookList books={filteredBooks} title={`Top 15 Books of ${selectedGenre}`} />

          <hr />

          {/* Rating Chart */}
          <ChartSection data={ratingData} title="The Rating Shelf" dataKey="rating" colors={colors} />
          <hr />

          {/* Pages Chart */}
          <ChartSection data={pageData} title="The Page Shelf" dataKey="pages" colors={colors} />

          <hr />

          
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
