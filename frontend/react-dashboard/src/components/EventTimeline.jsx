import React, { useState } from "react";

const EventTimeline = ({ events }) => {

  const [selected, setSelected] = useState(null);

  return (
    <div
      style={{
        marginTop: "30px",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 3px 10px rgba(0,0,0,0.1)"
      }}
    >
      <h3>Major Oil Market Events</h3>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >
        <thead>

          <tr>

            <th>Date</th>

            <th>Event</th>

            <th>Category</th>

            <th>Impact</th>

          </tr>

        </thead>

        <tbody>

          {events.map((event, index) => (

            <tr
              key={index}
              onClick={() => setSelected(event)}
              style={{
                cursor: "pointer",
                borderBottom: "1px solid #ddd"
              }}
            >
              <td>{event.Date}</td>

              <td>{event.Event}</td>

              <td>{event.Category}</td>

              <td>{event["Expected Impact"]}</td>

            </tr>

          ))}

        </tbody>

      </table>

      {selected && (

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            background: "#f9fafb"
          }}
        >

          <h4>{selected.Event}</h4>

          <p>

            <strong>Date:</strong>{" "}
            {selected.Date}

          </p>

          <p>

            <strong>Category:</strong>{" "}
            {selected.Category}

          </p>

          <p>

            <strong>Expected Impact:</strong>{" "}
            {selected["Expected Impact"]}

          </p>

        </div>

      )}

    </div>
  );
};

export default EventTimeline;