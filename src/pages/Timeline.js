import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from "chart.js";
import books from "../assets/data/books"; // Import books.js data
import "../css/timeline.css";

// Register Chart.js components
ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const Timeline = () => {
  // State for filters
  const [filter, setFilter] = useState("rating");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [searchQuery, setSearchQuery] = useState("");

  // Get unique genres from the books data
  const genres = ["All Genres", ...new Set(books.map((book) => book.genre))];

  // Filter books based on genre selection
  const filteredBooks = selectedGenre === "All Genres" ? books : books.filter((book) => book.genre === selectedGenre);

  // Extract book titles for X-axis labels
  const bookLabels = filteredBooks.map((book) => book.title);

  // Extract ratings and publication dates
  const bookRatings = filteredBooks.map((book) => book.rating * 20); // Scale rating (5 stars → 100)
  const bookPublicationDates = filteredBooks.map((book) => book.publicationYear || (2020 + book.id) % 2025); // Ensure publicationYear exists

  // Determine the data to display based on the dropdown selection
  let datasets = [];
  if (filter === "rating" || filter === "both") {
    datasets.push({
      label: "Ratings (Scaled to 100)",
      data: bookRatings,
      borderColor: "#652E98",
      backgroundColor: "rgba(101, 46, 152, 0.2)",
      pointBackgroundColor: "#18B3A5",
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
      backgroundColor: "rgba(36, 118, 188, 0.2)",
      pointBackgroundColor: "#A9DBD5",
      pointBorderColor: "#fff",
      borderWidth: 2,
      tension: 0.3,
    });
  }

  const chartData = { labels: bookLabels, datasets };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: true, position: "top" } },
    scales: { x: { title: { display: true, text: "Books" } }, y: { title: { display: true, text: "Value" }, min: 0, max: 100 } },
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
              <option value="both">Both</option>
            </select>
            <select className="dropdown" value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
              {genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Chart */}
        <div className="chart-container">
          <Line data={chartData} options={chartOptions} />
        </div>

        <hr />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Timeline;
