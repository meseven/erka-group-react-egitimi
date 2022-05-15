import React from "react";

function User({ user, increment }) {
  console.log("User component re-render");
  return (
    <div>
      User
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => increment(5)}>Arttır</button>
    </div>
  );
}

export default React.memo(User);
