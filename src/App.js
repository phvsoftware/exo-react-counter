import React, { useState } from "react";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  return (
    <div className="App">
      <h1>{counter1}</h1>
      {counter1 < 10 && counter1 + counter2 + counter3 < 18 && (
        <button
          onClick={() => {
            setCounter1(counter1 + 1);
          }}
        >
          +
        </button>
      )}
      {counter1 > 0 && (
        <button
          onClick={() => {
            setCounter1(counter1 - 1);
          }}
        >
          -
        </button>
      )}

      <h1>{counter2}</h1>
      {counter2 < 10 && counter1 + counter2 + counter3 < 18 && (
        <button
          onClick={() => {
            setCounter2(counter2 + 1);
          }}
        >
          +
        </button>
      )}
      {counter2 > 0 && (
        <button
          onClick={() => {
            setCounter2(counter2 - 1);
          }}
        >
          -
        </button>
      )}

      <h1>{counter3}</h1>
      {counter3 < 10 && counter1 + counter2 + counter3 < 18 && (
        <button
          onClick={() => {
            setCounter3(counter3 + 1);
          }}
        >
          +
        </button>
      )}
      {counter3 > 0 && (
        <button
          onClick={() => {
            setCounter3(counter3 - 1);
          }}
        >
          -
        </button>
      )}
      <div>Total : {counter1 + counter2 + counter3}</div>
    </div>
  );
}

export default App;
