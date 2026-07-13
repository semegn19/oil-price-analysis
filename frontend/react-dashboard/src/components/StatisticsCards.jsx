import React from "react";

const cardStyle = {
  flex: 1,
  minWidth: "180px",
  background: "#ffffff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 8px rgba(0,0,0,.1)",
  textAlign: "center"
};

const StatisticsCards = ({ stats }) => {
  if (!stats) return null;

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        marginBottom: "25px"
      }}
    >
      <div style={cardStyle}>
        <h4>Average Price</h4>
        <h2>${stats.mean_price}</h2>
      </div>

      <div style={cardStyle}>
        <h4>Maximum Price</h4>
        <h2>${stats.max_price}</h2>
      </div>

      <div style={cardStyle}>
        <h4>Minimum Price</h4>
        <h2>${stats.min_price}</h2>
      </div>

      <div style={cardStyle}>
        <h4>Std. Deviation</h4>
        <h2>{stats.std_dev}</h2>
      </div>

      <div style={cardStyle}>
        <h4>Observations</h4>
        <h2>{stats.count}</h2>
      </div>
    </div>
  );
};

export default StatisticsCards;