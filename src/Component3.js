import React from "react";
import { cntx } from "./Component1";
import { useContext } from "react";
import { memo } from "react";
const Component3 = () => {
  debugger;
  const data = useContext(cntx);
  return (
    <div>
      <div>Component3</div>
      <h1>{data ? data : "no-data-found"}</h1>
    </div>
  );
};

export default memo(Component3);
