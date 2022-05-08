import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((prevState) => {
      return prevState + 1;
    });
  };

  const handleDecrement = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <div>
      {counter > 3 && { firstname: "Agil" }}
      <span>{counter}</span>
      <button type="submit" onClick={handleIncrement}>
        +
      </button>
      <button type="submit" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}

export default Counter;

// there are 2 types of export

// 1. is named export
// 2. is default export
