import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Test");

  useEffect(() => {
    console.log("Component mount edildi.");

    const interval = setInterval(() => {
      console.log("interval");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("Count state değişti");
  }, [count]);

  useEffect(() => {
    console.log("Text state değişti");
  }, [text]);

  useEffect(() => {
    // console.log("Bir state değişti");
    // setText(Math.random());
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>Azalt</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Arttır</button>

      <hr />
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default Counter;
