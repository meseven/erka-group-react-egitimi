import React, { useState } from "react";
import CalculateArray from "./CalculateArray";

function Form() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(null);

  const calculate = () => {
    const arr = new Array(Number(value))
      .fill()
      .map(() => Math.floor(Math.random() * 1000));

    setData(arr);
  };

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={calculate}>Click</button>

      <CalculateArray data={data} />
    </div>
  );
}

export default Form;
