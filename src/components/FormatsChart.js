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
      },
    ],
  };

  return <Pie data={data} />;
};

export default FormatsChart;
