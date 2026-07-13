import React from "react";

const categories = [
  "All",
  "Conflict",
  "Economic",
  "OPEC",
  "Political",
  "Sanctions",
  "Geopolitical"
];

const Filters = ({
  startDate,
  endDate,
  category,
  onStartChange,
  onEndChange,
  onCategoryChange
}) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap",
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)",
        marginBottom: "20px"
      }}
    >
      <div>
        <label>Start Date</label>
        <br />
        <input
          type="date"
          value={startDate}
          onChange={(e) => onStartChange(e.target.value)}
        />
      </div>

      <div>
        <label>End Date</label>
        <br />
        <input
          type="date"
          value={endDate}
          onChange={(e) => onEndChange(e.target.value)}
        />
      </div>

      <div>
        <label>Category</label>
        <br />
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          {categories.map((cat) => (
            <option
              key={cat}
              value={cat}
            >
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;