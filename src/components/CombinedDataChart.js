import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

// Registering necessary chart components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

const CombinedDataChart = ({ book1, book2 }) => {
  // Use dynamic data from the selected books
  const data = {
    labels: ["Page Count", "Rating", "Genre Popularity", "Publication Year", "Price"], // Adjusted labels
    datasets: [
      {
        label: book1 ? book1.title : "Book 1",
        data: [
          book1?.pages || 0, // Page count
          book1?.rating || 0, // Rating value
          book1?.genrePopularity || 0, // Assuming you have this property or need to calculate
          book1?.publicationYear || 0, // Publication year
          book1?.price || 0, // Price
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)", // Pinkish color
        borderColor: "rgba(255, 99, 132, 1)", // Pinkish border color
        borderWidth: 1,
      },
      {
        label: book2 ? book2.title : "Book 2",
        data: [
          book2?.pages || 0, // Page count
          book2?.rating || 0, // Rating value
          book2?.genrePopularity || 0, // Assuming you have this property or need to calculate
          book2?.publicationYear || 0, // Publication year
          book2?.price || 0, // Price
        ],
        backgroundColor: "rgba(54, 162, 235, 0.2)", // Blueish color
        borderColor: "rgba(54, 162, 235, 1)", // Blueish border color
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true, // Ensure chart is responsive
    maintainAspectRatio: false, // Allow it to stretch based on container size
    scales: {
      r: {
        ticks: {
          display: false, // Hide radial ticks if needed
        },
        angleLines: {
          display: true,
          color: 'gray', // Color of the angle lines
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)', // Color of the grid lines
        },
        pointLabels: {
          font: {
            size: 16, // Increase label font size here
            weight: 'bold', // Optional: make the font bold
          },
          color: "black", // Label text color
        },
      },
    },
  };

  return (
    <div style={{ height: "70vh", width: "80%", margin: "auto" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default CombinedDataChart;
