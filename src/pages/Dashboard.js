import React, { useState } from 'react';
import books from '../assets/data/books';
import DashboardCard from '../components/DashboardCard';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [selectedGenre, setSelectedGenre] = useState("Fiction");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter books by genre and search query
  const filteredBooks = books.filter(book => 
    book.genre === selectedGenre && book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const ratingData = filteredBooks.map(book => ({ name: book.title, rating: book.rating }));
  const pageData = filteredBooks.map(book => ({ name: book.title, pages: book.pages }));

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Project Name</h1>
        <input 
          type="text" 
          placeholder="Search books..." 
          className="search-bar" 
          value={searchQuery}
          onChange={handleSearchChange} 
        />
      </header>

      <div className="main-content">
        <section className="welcome">
          <h2>Welcome to the Book Dashboard</h2>
          <p>Discover a world of books.</p>
          <div>Total Books: {books.length}</div>
        </section>

        <hr />

        <section className="data-shelf">
          <h3>Genre Mood Board</h3>
          <div className="genre-buttons">
            <button 
              onClick={() => setSelectedGenre("Fiction")} 
              className={selectedGenre === "Fiction" ? 'active' : ''}
            >
              Fiction
            </button>
            <button 
              onClick={() => setSelectedGenre("Non-fiction")} 
              className={selectedGenre === "Non-fiction" ? 'active' : ''}
            >
              Non-fiction
            </button>
            {/* Add more genres as needed */}
          </div>
          <h3>Top-Rated Books</h3>
          <div className="top-rated-books">
            {filteredBooks.map(book => (
              <DashboardCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        <hr />

        <section className="top-books">
          <h3>Top 15 Books of {selectedGenre}</h3>
          <div className="top-books-list">
            {filteredBooks.slice(0, 15).map(book => (
              <DashboardCard key={book.id} book={book} />
            ))}
          </div>
        </section>

        <hr />

        <section className="rating-shelf">
          <h3>The Rating Shelf</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={ratingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="rating" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        <hr />

        <section className="page-shelf">
          <h3>The Page Shelf</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={pageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pages" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </section>
      </div>

      <hr />

      <footer className="footer">
        <button>Dashboard</button>
        <button>Comparison</button>
        <button>Timeline</button>
        <div>Data provided by Google Books API </div>
        <div>&copy; 2025 Shelfy. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Dashboard;
