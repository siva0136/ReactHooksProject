import React from "react";
import { memo } from "react";
const Todos = ({ todos, fnAddTodos }) => {
  console.log("called the todos component");
  return (
    <div>
      {todos?.map((item, index) => {
        return <p key={`newTodos_${index}`}>{item}</p>;
      })}
      <button onClick={fnAddTodos}>Add New Todo</button>
    </div>
  );
};

export default memo(Todos);
