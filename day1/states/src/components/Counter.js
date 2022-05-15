import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("Count değişti", count);
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{count}</h1>
      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default Counter;
