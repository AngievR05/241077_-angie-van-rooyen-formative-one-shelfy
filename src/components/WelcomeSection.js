import React from "react";

const WelcomeSection = ({ totalBooks }) => {
  return (
    <section className="welcome">
      <h2>Welcome</h2>
      <div className="welcome-container">
      <div className="welcome-text">
        <p>
          Google Books API allows access to an extensive collection of book
          data, including metadata, previews, and availability. It enables
          searching for books by title, author, or keyword, making it useful
          for book discovery applications.
        </p>
      </div>
      <div className="total-books">
        <h3>Total Books</h3>
        <p>{totalBooks.toLocaleString()} Books</p>
      </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
