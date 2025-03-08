import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import venn from "venn.js";

const GenresChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const sets = [
      { sets: ["Group A"], size: 10 },
      { sets: ["Group B"], size: 10 },
      { sets: ["Group A", "Group B"], size: 5 }, // Intersection
    ];

    const chart = venn.VennDiagram().width(300).height(300);
    d3.select(chartRef.current).datum(sets).call(chart);
  }, []);

  return <div ref={chartRef}></div>;
};

export default GenresChart;
