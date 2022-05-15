import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <div>
      <div>
        <input
          placeholder="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <input
          placeholder="surname"
          value={surname}
          onChange={({ target }) => setSurname(target.value)}
        />
        <button>Click</button>
      </div>
    </div>
  );
}

export default Form;
