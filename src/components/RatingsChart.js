import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const RatingsChart = () => {
  const data = {
    labels: ["Books"],
    datasets: [
      {
        label: "Rating",
        data: [4.2], // Static data
        backgroundColor: "#E87E4C",
        borderColor: "#800000",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: { beginAtZero: true, max: 5 },
    },
  };

  return <Bar data={data} options={options} />;
};

export default RatingsChart;
