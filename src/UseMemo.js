import React from "react";
import { useState, useMemo } from "react";
const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Raja");
  const fnHandelIncrement = () => {
    setCount(count + 1);
  };

  const result = useMemo(() => {
    console.log("5k line code");
    return count % 2 === 0 ? "even" : "odd";
  }, [count]);
  const result2 = useMemo(() => {
    return checkEvenOrOdd(count);
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={fnHandelIncrement}>Increment</button>
      {/* <h2>{checkEvenOrOdd()}</h2> */}
      <h2>{result}</h2>
      <h2>result2 :{result2}</h2>
      <h3>{name}</h3>

      <button
        onClick={() => {
          setName(name === "Raja" ? "Ravi" : "Raja");
        }}
      >
        change name
      </button>
    </div>
  );
};
// normal function
const checkEvenOrOdd = (count) => {
  console.log("5k line code result2");
  return count % 2 === 0 ? "even" : "odd";
};

export default UseMemo;
