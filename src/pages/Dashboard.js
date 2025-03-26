import React, { useState, useEffect } from "react";
import axios from "axios"; 
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import GenreSelector from "../components/GenreSelector";
import WelcomeSection from "../components/WelcomeSection";
import BookList from "../components/BookList";
import ChartSection from "../components/ChartSection";
import Footer from "../components/Footer";
import "../css/dashboard.css";
import PlaceholderImage from "../assets/images/placeholder.jpg";

const Dashboard = () => {
  const [books, setBooks] = useState([]); // Store books from API
  const [selectedGenre, setSelectedGenre] = useState("Fiction");
  const [searchQuery, setSearchQuery] = useState("");
  const [totalBooks, setTotalBooks] = useState(0); // Store total book count

  // Fetch books from Google Books API using Axios
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${selectedGenre}&maxResults=15`
        );
        const data = response.data;

        if (data.items) {
          // Transform API response to match our book structure
          const formattedBooks = data.items.map((item) => ({
            id: item.id,
            title: item.volumeInfo.title || "Unknown Title",
            // Since we query by genre
            rating: item.volumeInfo.averageRating || 0,
            pages: item.volumeInfo.pageCount || 0,
            image: item.volumeInfo.imageLinks?.thumbnail || PlaceholderImage, // Default if no image
          }));

          setBooks(formattedBooks);
          setTotalBooks(data.totalItems || formattedBooks.length); // Update total books
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [selectedGenre]); // Refetch when genre changes

  // Filter books to only include those with a rating, page count, and image
  const filteredBooks = books
    .filter(
      (book) =>
        book.rating > 0 && 
        book.pages > 0 && 
        book.image !== "https://via.placeholder.com/128x190" 
    )
    .filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // If fewer than 15 books, fill up with books that may not meet all criteria (fallback)
  const booksToShow = [
    ...filteredBooks.slice(0, 15),
    ...books
      .filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          (book.rating === 0 || book.pages === 0 || book.image === "https://via.placeholder.com/128x190")
      )
      .slice(0, 15 - filteredBooks.length),
  ];

  // Data for charts
  const ratingData = booksToShow.map((book) => ({
    name: book.title,
    rating: book.rating,
  }));

  const pageData = booksToShow.map((book) => ({
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

        <div className="mainContent">
          <WelcomeSection totalBooks={totalBooks} />

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
                  {filteredBooks
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 5)
                    .map((book) => (
                      <li key={book.id}>{book.title}</li>
                    ))}
                </ol>
              </div>
            </div>
          </div>

          <hr />

          <BookList books={booksToShow} title={`Top 15 Books of ${selectedGenre}`} />

          <hr />

          <ChartSection data={ratingData} title="The Rating Shelf" dataKey="rating" colors={colors} />
          <hr />

          <ChartSection data={pageData} title="The Page Shelf" dataKey="pages" colors={colors} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
