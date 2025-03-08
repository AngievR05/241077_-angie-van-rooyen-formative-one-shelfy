import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const FormatsChart = () => {
  const data = {
    labels: ["Paperback", "Hardback", "EPUB", "PDF"],
    datasets: [
      {
        data: [40, 25, 20, 15], // Static data
        backgroundColor: ["#D63447", "#FFA07A", "#FFCC70", "#DFA878"],
        borderWidth: 0, // Removes the border around the pie chart slices
      },
    ],
  };

  const options = {
    responsive: true, // Makes the chart responsive
    maintainAspectRatio: false, // Prevents forced resizing
    plugins: {
      legend: {
        position: "top", // Adjust legend placement
      },
    },
  };

  return (
    <div className="pie-chart-wrapper">
      <Pie data={data} options={options} />
    </div>
  );
};

export default FormatsChart;
