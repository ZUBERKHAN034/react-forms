import React, { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("Guest");
  const [greet, setGreet] = useState("Hello");
  return (
    <div className="container">
      <h1>
        {greet} {name}
      </h1>
      <form
        onSubmit={(e) => {
          const getValue = value === "" ? name : value;
          setName(getValue);
          setGreet("Welcome");
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="What's your name?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
