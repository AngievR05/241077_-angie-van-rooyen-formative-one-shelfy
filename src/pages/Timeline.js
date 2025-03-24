import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import BookModal from "../components/BookModal"; // Import BookModal
import { Line } from "react-chartjs-2";
import {Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale,} from "chart.js";
import axios from "axios"; 
import "../css/timeline.css";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const Timeline = () => {
  const [filter, setFilter] = useState("rating");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]); // Store API fetched books data
  const [selectedBook, setSelectedBook] = useState(null); // Track selected book for modal

  // List of available genres
  const genres = [
    "All Genres", "Children's", "Fiction", "NonFiction", "Comics", "Young Adult", 
    "Science Fiction", "Fantasy", "Mystery", "Thriller", "Romance", "Horror"
  ];

  // Fetch books from API when Enter is pressed
  const handleSearch = async (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=15`
        );
        setBooks(response.data.items || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
  };

  // Filter books based on genre selection
  const filteredBooks =
    selectedGenre === "All Genres"
      ? books
      : books.filter((book) =>
          book.volumeInfo?.categories?.includes(selectedGenre)
        );

  // Extract ratings, publication years, and genres
  const bookRatings = filteredBooks.map((book) => book.volumeInfo?.averageRating || 0);
  const bookPublicationDates = filteredBooks.map((book) => book.volumeInfo?.publishedDate || "0");

  // Prepare data for the chart
  let datasets = [];

  if (filter === "rating" || filter === "both") {
    datasets.push({
      label: "Ratings (Scaled to 100)",
      data: bookRatings.map((rating) => rating * 20),
      borderColor: "#8b1e12",
      backgroundColor: "#8b1e12",
      pointBackgroundColor: "#e76f51",
      pointBorderColor: "#fff",
      borderWidth: 2,
      tension: 0.3,
    });
  }

  if (filter === "publication" || filter === "both") {
    datasets.push({
      label: "Publication Year",
      data: bookPublicationDates,
      borderColor: "#2476BC",
      backgroundColor: "#2476BC",
      pointBackgroundColor: "#018B98",
      pointBorderColor: "#fff",
      borderWidth: 2,
      tension: 0.3,
    });
  }

  const bookLabels = filteredBooks.map((book) => book.volumeInfo?.title);

  const chartData = { labels: bookLabels, datasets };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const index = tooltipItem.dataIndex;
            const book = filteredBooks[index];
            const bookTitle = book.volumeInfo?.title || "Unknown Title";
            const publicationDate = book.volumeInfo?.publishedDate || "Unknown Date";
            const rating = book.volumeInfo?.averageRating || "No Rating";
            return `${bookTitle} - ${publicationDate} - Rating: ${rating}`;
          },
        },
      },
    },
    scales: {
      x: { title: { display: true, text: "Books" } },
      y: { title: { display: true, text: "Value" }, beginAtZero: false },
    },
  };

  return (
    <div className="timeline">
      <Sidebar />
      <div className="main-content">
        <header className="header">
          <h1>Timeline</h1>
          <SearchBar 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            handleSearch={handleSearch} 
          />
        </header>

        <div className="results-container">
          <div className="book-grid">
            {filteredBooks.map((book) => (
              <div
                key={book.id}
                className="book-item"
                onClick={() => setSelectedBook(book)}
              >
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Book Cover" />
                <p>{book.volumeInfo.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="filters">
          <h2>Book Trends Over Time</h2>
          <div className="dropdowns">
            <select className="dropdown" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="rating">Rating</option>
              <option value="publication">Publication Date</option>
              <option value="both">All Trends</option>
            </select>
            <select className="dropdown" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
              {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="chartContainer">
          <Line data={chartData} options={chartOptions} />
        </div>

        {selectedBook && <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />}

        <Footer />
      </div>
    </div>
  );
};

export default Timeline;
