// import axios from "axios";
import React, { useTransition } from "react";
import { useState } from "react";
const UseTransition = () => {
  const [name, setName] = useState("Raja");
  const [data, setDta] = useState();
  const [isPending, startTransition] = useTransition(name);
  const fnHandelClick = () => {
    setName(name === "Raja" ? "Ravi" : "Raja");
    startTransition(() => {
      //   axios
      //     .get("https://jsonplaceholder.typicode.com/photos")
      //     .then((res) => {
      //       setDta(res.data);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      const _data = [];
      for (let i = 1; i < 30000; i++) {
        _data.push("Item" + i);
        setDta(_data);
      }
    });
  };
  return (
    <div>
      <h1>UseTransition</h1>
      <button onClick={fnHandelClick}>Cilck Me</button>
      <h2>{name}</h2>
      {isPending
        ? "Loading the data"
        : data &&
          data?.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
      {/* {data &&
        data?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })} */}
    </div>
  );
};

export default UseTransition;
