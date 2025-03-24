import React from "react";
import "../css/bookModal.css"; // Import the modal styles

const BookModal = ({ book, onClose }) => {
  if (!book) return null;

  const { title, authors, description, averageRating, pageCount, imageLinks } = book.volumeInfo;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <div className="modal-body">
          <img className="book-cover" src={imageLinks?.thumbnail} alt={title} />
          <div className="book-info">
            <h2>{title}</h2>
            <p><strong>Author(s):</strong> {authors ? authors.join(", ") : "Unknown"}</p>
            <p><strong>Rating:</strong> {averageRating ? `${averageRating} ⭐` : "No rating"}</p>
            <p><strong>Page Count:</strong> {pageCount || "N/A"}</p>
            <div className="description">{description ? description : "No description available."}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
