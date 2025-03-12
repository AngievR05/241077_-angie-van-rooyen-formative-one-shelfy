import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register the necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const RatingsChart = ({ book1, book2 }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (book1 && book2) {
      setChartData({
        labels: [book1.title, book2.title], // Use book titles as labels
        datasets: [
          {
            label: "Ratings",
            data: [book1.rating, book2.rating], // Use ratings from the selected books
            backgroundColor: ["#FF5733", "#33B5FF"], // Different colors for each book
            borderColor: ["#800000", "#0055FF"], // Border color
            borderWidth: 1,
          },
        ],
      });
    }
  }, [book1, book2]); // Re-run the effect when book1 or book2 changes

  // If no books are selected, render a message instead of the chart
  return chartData ? (
    <Bar data={chartData} options={{ responsive: true, scales: { y: { beginAtZero: true, max: 5 } } }} />
  ) : (
    <p>Select books to see ratings comparison.</p>
  );
};

export default RatingsChart;
