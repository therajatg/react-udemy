import { useCounter } from "../hooks/useCounter";

export const BackwardCounter = () => {
  const counter = useCounter(false);
  return <button>{counter}</button>;
};
