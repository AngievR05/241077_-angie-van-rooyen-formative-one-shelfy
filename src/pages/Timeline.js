import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from "chart.js";
import "../css/timeline.css";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const Timeline = () => {
  const [filter, setFilter] = useState("rating");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]); // Store API fetched books data

  // List of available genres
  const genres = [
    "All Genres", "Children's", "Fiction", "NonFiction", "Comics", "Young Adult", "Science Fiction", "Fantasy", "Mystery", "Thriller", "Romance", "Horror",
  ];

  // Function to fetch books for a given genre
  const fetchBooksForGenre = async (genre) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=40`; // Fetching more results
    const response = await fetch(url);
    const data = await response.json();
    return data.items || [];
  };

  // Fetch books for all genres
  useEffect(() => {
    const fetchAllBooks = async () => {
      let allBooks = [];

      for (let genre of genres) {
        if (genre !== "All Genres") {
          const genreBooks = await fetchBooksForGenre(genre);
          allBooks = [...allBooks, ...genreBooks];
        }
      }
      setBooks(allBooks);
    };

    fetchAllBooks();
  }, []);

  // Filter books based on genre selection
  const filteredBooks = selectedGenre === "All Genres"
    ? books.filter((book) => {
        // Only keep books with valid genres from the list of specific genres
        const bookGenres = book.volumeInfo?.categories || [];
        return bookGenres.some((genre) => genres.includes(genre));
      })
    : books.filter((book) => book.volumeInfo?.categories?.includes(selectedGenre));

  // Extract ratings, publication years, and genres
  const bookRatings = filteredBooks.map((book) => book.volumeInfo?.averageRating || 0); // Use 0 if no rating
  const bookPublicationDates = filteredBooks.map((book) => book.volumeInfo?.publishedDate || "0"); // Use 0 if no publication date
  const bookGenres = filteredBooks.map((book) => book.volumeInfo?.categories || ["Unknown Genre"]);

  // Prepare data for the chart
  let datasets = [];

  if (filter === "rating" || filter === "both") {
    datasets.push({
      label: "Ratings (Scaled to 100)",
      data: bookRatings.map(rating => rating * 20), // Scale ratings from 5 stars to 100
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

  // Tooltip configuration to display genre
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: {
        callbacks: {
          // Modify the tooltip to show title, publication date, and genre
          label: (tooltipItem) => {
            const index = tooltipItem.dataIndex;
            const book = filteredBooks[index];
            const bookTitle = book.volumeInfo?.title || "Unknown Title";
            const bookGenre = bookGenres[index].join(", "); // Combine multiple genres if applicable
            const publicationDate = book.volumeInfo?.publishedDate || "Unknown Date";
            const rating = book.volumeInfo?.averageRating || "No Rating";

            return `${bookTitle} - ${publicationDate} - Genre(s): ${bookGenre} - Rating: ${rating}`;
          }
        }
      }
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
        {/* Header with Search Bar */}
        <header className="header">
          <h1>Timeline</h1>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </header>

        {/* Filters Section */}
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

        {/* Chart */}
        <div className="chartContainer">
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Timeline;
