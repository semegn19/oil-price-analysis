import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        background: "#1f2937",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>
          Brent Oil Analysis Dashboard
        </h2>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          fontWeight: "bold"
        }}
      >
        <span>Dashboard</span>
        <span>Prices</span>
        <span>Events</span>
        <span>Change Points</span>
      </div>
    </nav>
  );
};

export default Navbar;