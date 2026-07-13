import React from "react";

const EventTable = ({ events }) => {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,.1)",
        marginTop: "30px"
      }}
    >
      <h3>Historical Market Events</h3>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr
            style={{
              background: "#f3f4f6"
            }}
          >
            <th style={styles.cell}>Date</th>
            <th style={styles.cell}>Event</th>
            <th style={styles.cell}>Category</th>
            <th style={styles.cell}>Expected Impact</th>
          </tr>
        </thead>

        <tbody>

          {events.map((event, index) => (

            <tr
              key={index}
            >
              <td style={styles.cell}>
                {event.Date}
              </td>

              <td style={styles.cell}>
                {event.Event}
              </td>

              <td style={styles.cell}>
                {event.Category}
              </td>

              <td style={styles.cell}>
                {event["Expected Impact"]}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

const styles = {

  cell: {

    padding: "12px",

    borderBottom: "1px solid #ddd",

    textAlign: "left"

  }

};

export default EventTable;