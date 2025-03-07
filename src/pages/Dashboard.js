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

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        {/* Header */}
        <header className="header">
          <h1>Shelfy Dashboard</h1>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </header>

        <div className="main-content">
          {/* Welcome Section */}
          <WelcomeSection totalBooks={books.length} />

          <hr />

          {/* Genre Mood Board */}
          <section className="data-shelf">
            <h2>The Data Shelf</h2>
            <div className="data-shelf-header">
              <h3>Genre Mood Board</h3>
              <p>Explore books by genre! Click on a category to discover top titles.</p>
              <GenreSelector selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
            </div>
          </section>

          {/* Top-Rated Books */}
          <section className="top-rated">
            <h3>Top-Rated Books</h3>
            <ol>
              {filteredBooks.slice(0, 5).map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ol>
          </section>

          <hr />

          {/* Top 15 Books */}
          <BookList books={filteredBooks} title={`Top 15 Books of ${selectedGenre}`} />

          <hr />

          {/* Rating Chart */}
          <ChartSection data={ratingData} title="The Rating Shelf" dataKey="rating" color="#E07A5F" />

          <hr />

          {/* Page Chart */}
          <ChartSection data={pageData} title="The Page Shelf" dataKey="pages" color="#3D405B" />

          <hr />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



// import React, { useState } from 'react';
// import books from '../assets/data/books';
// import DashboardCard from '../components/DashboardCard';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
// import Sidebar from '../components/Sidebar';
// import { Search } from 'lucide-react';
// import '../css/dashboard.css';
// import { ReactComponent as SearchIcon } from '../assets/sidebar-icons/search-svgrepo-com.svg';

// const Dashboard = () => {
//   const [selectedGenre, setSelectedGenre] = useState("Fiction");
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredBooks = books.filter(book => 
//     book.genre === selectedGenre && book.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const ratingData = filteredBooks.map(book => ({ name: book.title, rating: book.rating }));
//   const pageData = filteredBooks.map(book => ({ name: book.title, pages: book.pages }));

//   return (
//     <div className="dashboard">
//       <Sidebar />
//       <div className="content">
//         {/* Header */}
//         <header className="header">
//           <h1>Shelfy Dashboard</h1>
//           {/* <div className="search-container">
//             <Search className="search-icon" size={20} />
//             <input 
//               type="text" 
//               placeholder="Search books..." 
//               className="search-bar" 
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div> */}
//           <div className="search-container">
//             <SearchIcon className="search-icon" size={20} />
//             <input 
//               type="text" 
//               placeholder="Search books..." 
//               className="search-bar" 
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//         </header>

//         <div className="main-content">
//           {/* Welcome Section */}
//           <section className="welcome">
//             <h2>Welcome</h2>
//             <div className="welcome-text">
//               <p>
//               Google Books API allows access to an extensive collection of book data, including metadata, previews, and availability. It enables searching for books by title, author, or keyword, making it useful for book discovery applications.
//               </p>
//             </div>
//             <div className="total-books">
//               <h3>Total Books</h3>
//               <p>{books.length.toLocaleString()} Books</p>
//             </div>
//           </section>

//           <hr />

//           {/* Genre Mood Board */}
//           <section className="data-shelf">
//             <h2>The Data Shelf</h2>
//             <div className="data-shelf-header">
//             <h3>Genre Mood Board</h3>
//             <p>Explore books by genre! Click on a category to discover top titles in Fiction, Mystery, Science Fiction, and more.</p>
//             <div className="genre-buttons">
//               {["Fiction", "Non-fiction", "Fantasy", "Science Fiction", "Romance", "Comics", "Children", "Young Adult", "Horror", "Mystery & Thriller"].map(genre => (
//                 <button 
//                   key={genre}
//                   onClick={() => setSelectedGenre(genre)} 
//                   className={selectedGenre === genre ? 'active' : ''}
//                 >
//                   {genre}
//                 </button>
//               ))}
//             </div>
//             </div>
//           </section>

//           {/* Top-Rated Books */}
//           <section className="top-rated">
//             <h3>Top-Rated Books</h3>
//             <ol>
//               {filteredBooks.slice(0, 5).map(book => (
//                 <li key={book.id}>{book.title}</li>
//               ))}
//             </ol>
//           </section>

//           <hr />

//           {/* Top 15 Books */}
//           <section className="top-books">
//             <h2>Top 15 Books of {selectedGenre}</h2>
//             <div className="top-books-list">
//               {filteredBooks.slice(0, 15).map(book => (
//                 <DashboardCard key={book.id} book={book} />
//               ))}
//             </div>
//           </section>

//           <hr />

//           {/* Rating Chart */}
//           <section className="rating-shelf">  <h2>The Rating Shelf</h2> 
//           <div className='rating-chart'>
//             <ResponsiveContainer width="100%" height={300}> 
//               <BarChart data={ratingData}> 
//                 <CartesianGrid strokeDasharray="3 3" /> 
//                 <XAxis dataKey="name" /> 
//                 <YAxis domain={[0,5]} /> 
//                 <Tooltip /> 
//                 <Bar dataKey="rating" fill="#E07A5F" /> 
//                 </BarChart> 
//               </ResponsiveContainer> 
//               </div>
//           </section>

//           <hr />

//           {/* Page Chart */}
//           <section className="page-shelf">
//             <h2>The Page Shelf</h2>
//             <div className='page-chart'>
//             <ResponsiveContainer width="100%" height={300}>
//               <BarChart data={pageData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="pages" fill="#3D405B" />
//               </BarChart>
//             </ResponsiveContainer>
//             </div>
//           </section>

//         </div>

//         <hr />

//         {/* Footer */}
//         <footer className="footer">
//           <button>Landing Page</button>
//           <button>Comparison Page</button>
//           <button>Timeline Page</button>
//           <div>Data provided by Google Books API</div>
//           <div>&copy; 2025 Shelfy. All rights reserved.</div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
