import { useCounter } from "../hooks/useCounter";

export const ForwardCounter = () => {
  const counter = useCounter();
  return <button>{counter}</button>;
};
