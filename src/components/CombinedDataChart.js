import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Tooltip, Legend } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

const CombinedDataChart = () => {
  const data = {
    labels: ["Page Count", "Ratings Count", "Genre Popularity", "Publication Year", "Average Rating"],
    datasets: [
      {
        label: "Book 1",
        data: [300, 500, 4, 2005, 4.5],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Book 2",
        data: [280, 450, 5, 2010, 4.2],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={data} />;
};

export default CombinedDataChart;
