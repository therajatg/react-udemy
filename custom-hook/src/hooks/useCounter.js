import { useState, useEffect } from "react";

export const useCounter = (action = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      action === true
        ? setCounter((prev) => prev + 1)
        : setCounter((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [action]);

  return counter;
};
