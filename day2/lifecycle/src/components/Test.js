import React, { useEffect } from "react";

function Test() {
  const [colors, setColors] = React.useState(["red"]);
  const [colorsLength, setColorsLength] = React.useState(colors.length);

  const handleClick = () => {
    setColors((prev) => [...prev, "green"]);
  };

  useEffect(() => {
    setColorsLength(colors.length);
  }, [colors]);

  return (
    <div>
      <div>Colors: {JSON.stringify(colors)}</div>
      <div>Colors Length: {colorsLength}</div>
      <div>
        <button onClick={handleClick}>Click</button>
      </div>
    </div>
  );
}

export default Test;


// React.memo - useMemo - useCallback