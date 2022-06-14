import "./styles.css";
import React, { useState } from react;
export default function App() {
  const [sum, setSum] = useState("0");

  return (
    <div className="App">
      <h1>Counter</h1>
      <button>+</button>
      <button>-</button>
      <button>^</button>
      <br />
      <br />

      <div>{sum}</div>
    </div>
  );
}
