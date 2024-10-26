import React, { useReducer, useEffect } from "react";
import axios from "axios";

const init = {
  name: "",
  count: 0,
  users: [],
};
const reducer = (state, action) => {
  debugger;
  switch (action.type) {
    case "NAME1":
      return { ...state, name: action.payload };
    case "COUNT":
      return { ...state, count: action.payload };
    case "USERS":
      console.log(action.payload);
      return { ...state, users: action.payload };

    default:
      return state;
  }
};
const UseReducer = () => {
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch({ type: "USERS", payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [state, dispatch] = useReducer(reducer, init);
  const fnCountChange = () => {
    dispatch({ type: "COUNT", payload: state.count + 1 });
  };
  const fnNameChange = () => {
    debugger;
    const upDateName = state.name === "raja" ? "Ravi" : "raja";
    dispatch({
      typpe: "NAME1",
      payload: upDateName,
    });
  };
  return (
    <div>
      <div>UseReducer</div>
      <h1>{state.count}</h1>
      <button onClick={fnCountChange}>count Change</button>
      <h2>{state.name}</h2>
      <button onClick={fnNameChange}>name Change</button>
      <ul>
        {state?.users?.map((item, index) => {
          return <li key={`users_${index}`}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseReducer;
