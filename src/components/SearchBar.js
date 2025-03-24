import React from "react";
import { ReactComponent as SearchIcon } from "../assets/sidebar-icons/search-svgrepo-com.svg";

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <div className="search-container">
      <SearchIcon className="search-icon" size={20} />
      <input
        type="text"
        placeholder="Search books..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleSearch} // Trigger search on Enter
      />
    </div>
  );
};

export default SearchBar;
