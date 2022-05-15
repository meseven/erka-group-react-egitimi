import React from "react";

function Header({ count }) {
  console.log("Header component re-render");

  const arr = new Array(count)
    .fill()
    .map(() => Math.floor(Math.random() * 1000));

  return (
    <div>
      Header <br />
      <pre>{JSON.stringify(arr, null, 2)}</pre>
      <hr />
    </div>
  );
}

export default React.memo(Header);
