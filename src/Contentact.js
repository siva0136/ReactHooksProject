import React from "react";
import Component1 from "./Component1";
import { useNavigate } from "react-router-dom";

export const Contentact = () => {
  const navigate = useNavigate();
  const fnBackHome = () => {
    navigate(-1);
  };
  return (
    <div>
      <div>Contentact</div>
      <Component1 />
      <button onClick={fnBackHome}>Go To Home</button>
    </div>
  );
};
