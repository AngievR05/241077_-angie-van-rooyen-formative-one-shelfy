import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const RatingsChart = ({ book1, book2 }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (book1 && book2) {
      setChartData({
        labels: [book1.title, book2.title], 
        datasets: [
          {
            label: "Ratings",
            data: [book1.rating, book2.rating], 
            backgroundColor: ["#D55023", "#ECAF23"], 
            borderWidth: 0,
          },
        ],
      });
    }
  }, [book1, book2]); 

  // If no books are selected, render a message instead of the chart
  return chartData ? (
    <Bar data={chartData} options={{ responsive: true, scales: { y: { beginAtZero: true, max: 5 } } }} />
  ) : (
    <p>Select books to see ratings comparison.</p>
  );
};

export default RatingsChart;
