import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registering necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PricePieChart = ({ books }) => {
  // Static price data for Pie chart
  const priceData = books.map(book => book.price); 

  const data = {
    labels: books.map(book => book.title), // Titles as labels
    datasets: [
      {
        data: priceData,
        backgroundColor: ['#D55023', '#ECAF23'], // Example colors for the books
        borderColor: '#FFFFFF',
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `$${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="pie-chart-container">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PricePieChart;
