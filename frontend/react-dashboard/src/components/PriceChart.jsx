import React from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";

const PriceChart = ({ prices, changePoint }) => {
  return (
    <div
      style={{
        width: "100%",
        height: 500,
        background: "#ffffff",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0px 3px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h3>Historical Brent Oil Prices</h3>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={prices}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="Date"
            minTickGap={50}
          />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            type="monotone"
            dataKey="Price"
            stroke="#2563eb"
            dot={false}
            strokeWidth={2}
          />

          {changePoint && (
            <ReferenceLine
              x={changePoint}
              stroke="red"
              strokeWidth={2}
              label="Change Point"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;