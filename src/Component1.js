import React from "react";
import Component2 from "./Component2";
import { createContext, useState } from "react";
import { memo } from "react";
export const cntx = createContext();
const Component1 = () => {
  const [user, setUser] = useState("raja");
  const fnUserChange = () => {
    setUser(user === "raja" ? "Ravi" : "raja");
  };
  console.log("Component3 is called");
  return (
    <cntx.Provider value={user}>
      <div>
        <div>Component1</div>
        <p>{user}</p>
        <button onClick={fnUserChange}>change User</button>
        <Component2 />
      </div>
    </cntx.Provider>
  );
};

export default memo(Component1);
