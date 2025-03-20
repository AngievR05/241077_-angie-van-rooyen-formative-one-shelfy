import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

// Registering necessary chart components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

const CombinedDataChart = ({ book1, book2 }) => {
  // Function to handle undefined or missing data and provide default values
  const getBookData = (book, field, multiplier = 1) => {
    return book?.[field] !== undefined && book?.[field] !== null 
      ? book[field] * multiplier  
      : 0; // Default to 0 if the field is missing or undefined
  };

  // If the publication year is not available, use the current year to calculate the number of years since publication
  const getPublicationYearData = (book) => {
    const currentYear = new Date().getFullYear();
    return book?.publishedDate ? currentYear - new Date(book.publishedDate).getFullYear() : 0; // Default to 0 if the year is missing
  };

  // Use dynamic data from the selected books
  const data = {
    labels: [
      "Page Count", 
      "Rating (x20)", 
      "Average Review", 
      "Years Since Publication", 
      "Price"
    ], 
    datasets: [
      {
        label: book1 ? book1.title : "Book 1",
        data: [
          getBookData(book1, "pages"), 
          getBookData(book1, "rating", 20), // Multiply the rating by 20
          getBookData(book1, "averageReview", 1), 
          getPublicationYearData(book1), 
          getBookData(book1, "price"), 
        ],
        backgroundColor: "#BF2D20", 
        borderColor: "#791118", 
        borderWidth: 1,
      },
      {
        label: book2 ? book2.title : "Book 2",
        data: [
          getBookData(book2, "pages"), 
          getBookData(book2, "rating", 20), 
          getBookData(book2, "averageReview", 1), 
          getPublicationYearData(book2), 
          getBookData(book2, "price"),
        ],
        backgroundColor: "#ECAF23", 
        borderColor: "#E47A24", 
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true, 
    maintainAspectRatio: false, 
    scales: {
      r: {
        ticks: {
          display: true, 
          beginAtZero: true,
          max: 100, 
        },
        angleLines: {
          display: true,
          color: 'gray', 
        },
        grid: {
          color: 'rgba(59, 3, 3, 0.32)',
        },
        pointLabels: {
          font: {
            size: 16, 
            weight: 'bold', 
          },
          color: "black", 
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,  // Tooltip enabled
        callbacks: {
          label: (tooltipItem) => {
            const label = tooltipItem.dataset.label || '';
            const value = tooltipItem.raw || 0;
            const labelText = tooltipItem.label || '';

            return `${labelText}: ${value}`;
          },
        },
      },
    },
  };

  return (
    <div style={{ height: "70vh", width: "100%", margin: "auto" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default CombinedDataChart;
