function Price() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            width: "300px",
          }}
        >
          <h3>Title 1</h3>
          <p>Price: $10</p>
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            width: "300px",
          }}
        >
          <h3>Title 2</h3>
          <p>Price: $20</p>
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            width: "300px",
          }}
        >
          <h3>Title 3</h3>
          <p>Price: $30</p>
          <p>
            Description: Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Price;
