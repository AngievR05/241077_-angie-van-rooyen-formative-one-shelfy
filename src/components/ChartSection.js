import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const ChartSection = ({ data, title, dataKey }) => {
  return (
    <section className="chart-section">
      <h2>{title}</h2>
      <div className="chart-section-text">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* Assign different colors manually */}
            <Bar dataKey={dataKey} fill="#961A22" />
            <Bar dataKey={dataKey} fill="#BF2D1E" />
            <Bar dataKey={dataKey} fill="#D55023" />
            <Bar dataKey={dataKey} fill="#E47A24" />
            <Bar dataKey={dataKey} fill="#ECAF23" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ChartSection;
