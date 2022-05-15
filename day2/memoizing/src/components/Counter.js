import React, { useState, useMemo, useCallback } from "react";
// import Header from "./Header";
import User from "./User";

function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter component re-render");

  const increment = useCallback((value) => {
    setCount((prev) => prev + value);
  }, []);

  const user = useMemo(() => {
    return {
      id: 1,
      name: "Burak",
    };
  }, []);

  return (
    <div>
      <User user={user} increment={increment} />

      <h1>{count}</h1>
      <button onClick={() => increment(1)}>Arttır</button>
    </div>
  );
}

export default Counter;
