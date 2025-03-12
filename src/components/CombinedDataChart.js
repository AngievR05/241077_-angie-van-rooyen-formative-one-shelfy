import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

// Registering necessary chart components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

const CombinedDataChart = ({ book1, book2 }) => {
  // Use dynamic data from the selected books
  const data = {
    labels: ["Page Count", "Rating", "Genre Popularity", "Publication Year", "Price"], 
    datasets: [
      {
        label: book1 ? book1.title : "Book 1",
        data: [
          book1?.pages || 0, 
          book1?.rating || 0, 
          book1?.genrePopularity || 0, 
          book1?.publicationYear || 0, 
          book1?.price || 0, 
        ],
        backgroundColor: "#BF2D20", 
        borderColor: "#791118", 
        borderWidth: 1,
      },
      {
        label: book2 ? book2.title : "Book 2",
        data: [
          book2?.pages || 0, 
          book2?.rating || 0, 
          book2?.genrePopularity || 0, 
          book2?.publicationYear || 0, 
          book2?.price || 0,
        ],
        backgroundColor: "#ECAF23", // 
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
          display: false, 
        },
        angleLines: {
          display: true,
          color: 'gray', 
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
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
  };

  return (
    <div style={{ height: "70vh", width: "100%", margin: "auto" }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default CombinedDataChart;
