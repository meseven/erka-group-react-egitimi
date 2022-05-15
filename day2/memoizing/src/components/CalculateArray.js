import React from "react";

function CalculateArray({ data }) {
  return (
    <div>
      CalculateArray
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default CalculateArray;
