import React from "react";
import "./ComparisonPage.css";
import RatingsChart from "./RatingsChart";
import GenresChart from "./GenresChart";
import FormatsChart from "./FormatsChart";
import CombinedDataChart from "./CombinedDataChart";

const ComparisonPage = () => {
  return (
    <div className="comparison-container">
      <h1>Book Comparison</h1>
      
      <section className="book-selection">
        <div className="book-card">
          <h2>Select Book 1</h2>
          <input type="text" placeholder="Search" />
          <div className="book-details">
            <p>Title</p>
            <p>by Author</p>
            <p>Pages:</p>
            <p>Rating:</p>
          </div>
        </div>

        <div className="book-card">
          <h2>Select Book 2</h2>
          <input type="text" placeholder="Search" />
          <div className="book-details">
            <p>Title</p>
            <p>by Author</p>
            <p>Pages:</p>
            <p>Rating:</p>
          </div>
        </div>
      </section>

      <section className="data-visualization">
        <div className="chart-container">
          <h3>Ratings</h3>
          <RatingsChart />
        </div>
        <div className="chart-container">
          <h3>Genres</h3>
          <GenresChart />
        </div>
        <div className="chart-container">
          <h3>Book Formats Availability</h3>
          <FormatsChart />
        </div>
      </section>

      <section className="combined-data">
        <h3>All Data Combined</h3>
        <CombinedDataChart />
      </section>
    </div>
  );
};

export default ComparisonPage;
