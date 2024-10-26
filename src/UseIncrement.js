import { useState } from "react";
const useIncrement = (init) => {
  debugger;
  const [count, setCount] = useState(init);
  const fnInce = () => {
    setCount(count + 1);
  };
  return [count, fnInce];
};

export default useIncrement;
