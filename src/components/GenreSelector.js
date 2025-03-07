import React from "react";

const genres = [
  "Fiction",
  "Non-fiction",
  "Fantasy",
  "Science Fiction",
  "Romance",
  "Comics",
  "Children",
  "Young Adult",
  "Horror",
  "Mystery & Thriller",
];

const GenreSelector = ({ selectedGenre, setSelectedGenre }) => {
  return (
    <div className="genre-buttons">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => setSelectedGenre(genre)}
          className={selectedGenre === genre ? "active" : ""}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreSelector;
