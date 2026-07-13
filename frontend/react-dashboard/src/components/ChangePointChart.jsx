import React from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ReferenceLine,
  Legend
} from "recharts";

const ChangePointChart = ({
  prices,
  changePoint,
  muBefore,
  muAfter
}) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)",
        marginTop: "25px"
      }}
    >
      <h3>Bayesian Change Point Detection</h3>

      <ResponsiveContainer
        width="100%"
        height={450}
      >
        <LineChart data={prices}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            dataKey="Date"
            minTickGap={60}
          />

          <YAxis />

          <Tooltip />

          <Legend />

          <Line
            dataKey="Price"
            stroke="#2563eb"
            dot={false}
            strokeWidth={2}
            name="Brent Price"
          />

          {changePoint && (
            <ReferenceLine
              x={changePoint}
              stroke="red"
              strokeWidth={3}
              label={{
                value: "Change Point",
                position: "top"
              }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>

      <div
        style={{
          display: "flex",
          gap: "40px",
          marginTop: "20px",
          flexWrap: "wrap"
        }}
      >
        <div>
          <strong>Mean Before</strong>

          <p>${muBefore}</p>
        </div>

        <div>
          <strong>Mean After</strong>

          <p>${muAfter}</p>
        </div>
      </div>
    </div>
  );
};

export default ChangePointChart;