import React from "react";
import DashboardCard from "./DashboardCard";

const BookList = ({ books, title }) => {
  return (
    <section className="top-books">
      <h2>{title}</h2>
      <div className="top-books-list">
        {books.slice(0, 15).map((book) => (
          <DashboardCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default BookList;
