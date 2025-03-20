import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PricePieChart = ({ books }) => {
  // Map over books and get the price or display "Price Not Available" if the price is missing
  const priceData = books.map(book => {
    const price = book.price ? book.price : "Price Not Available";
    console.log(`Book: ${book.title}, Price: ${price}`); // Log book and price to console
    return price;
  });

  // Replace "Price Not Available" with 0 to handle it in the chart
  const chartData = priceData.map(price => {
    return price === "Price Not Available" ? 0 : price; // 0 acts as a placeholder for missing price data
  });

  // Log the final chart data that will be used
  console.log('Processed price data:', chartData);

  const data = {
    labels: books.map(book => book.title),
    datasets: [
      {
        data: chartData,
        backgroundColor: ['#D55023', '#ECAF23'], // You can customize the colors
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
            // Show "Price Not Available" if the data is 0
            if (tooltipItem.raw === 0) {
              return "Price Not Available";
            }
            return `$${tooltipItem.raw}`;
          },
        },
      },
    },
    maintainAspectRatio: false, // Maintain aspect ratio
  };

  return (
    <div className="pie-chart-container">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PricePieChart;
