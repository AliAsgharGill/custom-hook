import { useState } from "react";

const useCounter = () => {
  const [count, setCounter] = useState(0);
  function Increment() {
    setCounter(count + 1);
  }
  function Decrement() {
    setCounter(count - 1);
  }
  return [count, Increment, Decrement];
};

export default useCounter;
