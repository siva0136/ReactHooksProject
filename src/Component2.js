import React from "react";
import Component3 from "./Component3";
import { memo } from "react";
const Component2 = () => {
  return (
    <div>
      <div>Component2</div>
      <Component3 />
    </div>
  );
};

export default memo(Component2);
