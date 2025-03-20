import React, { useEffect, useState } from "react"; 
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const RatingsChart = ({ book1, book2 }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (book1 && book2) {
      // Handle missing ratings and set a default if not available
      const rating1 = book1.rating || "No Rating";
      const rating2 = book2.rating || "No Rating";

      setChartData({
        labels: [book1.title, book2.title], 
        datasets: [
          {
            label: "Ratings",
            data: [
              typeof rating1 === "number" ? rating1 : 0, // Replace "No Rating" with 0
              typeof rating2 === "number" ? rating2 : 0, // Replace "No Rating" with 0
            ], 
            backgroundColor: ["#D55023", "#ECAF23"], 
            borderWidth: 0,
          },
        ],
      });
    }
  }, [book1, book2]); 

  // If no books are selected, render a message instead of the chart
  return chartData ? (
    <Bar
      data={chartData}
      options={{
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            max: 5,
          },
          x: {
            ticks: {
              // If labels are too long, break them to the next line
              callback: function (value) {
                const label = this.getLabelForValue(value);
                return label.length > 20 ? label.split(" ").join("\n") : label; // Break long titles into multiple lines
              },
            },
          },
        },
      }}
    />
  ) : (
    <p>Select books to see ratings comparison.</p>
  );
};

export default RatingsChart;
