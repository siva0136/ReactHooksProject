import React from "react";
import Todos from "./Todos";
import { useState, useCallback } from "react";
const UseCallback = () => {
  const [todos, SetTodos] = useState([]);
  const [count, setCount] = useState(0);
  const fnAddTodos = useCallback(() => {
    SetTodos((todos) => [...todos, "NEW TODOS"]);
  }, [todos]);
  const fnHandelInc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <Todos todos={todos} fnAddTodos={fnAddTodos}></Todos>
      <h1>{count}</h1>
      <button onClick={fnHandelInc}>Increment</button>
    </div>
  );
};

export default UseCallback;
