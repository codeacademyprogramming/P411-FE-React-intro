import { useEffect, useRef, useState } from "react";

export const StopWatch = () => {
  const [seconds, setSeconds] = useState(0);
  const ref = useRef(null);
  let customRef = {};

  // ref usecase - 1. DOM Node 2. Static reference troughout component lifecycle
  useEffect(() => {
    if (seconds === 0) {
      customRef.current = ref.current = setInterval(() => {
        setSeconds((prevState) => prevState + 1);
      }, 1000);
    }
    return () => {
      clearInterval(customRef.current);
      customRef.current = null;
    };
  }, [seconds]);

  const handleReset = () => {
    setSeconds(0);
    clearInterval(ref.current);
    ref.current = null;
  };

  return (
    <div>
      <span>{seconds}</span>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
