import React from "react";
import useIncrement from "./UseIncrement";
import useFetch from "./UseFetch";
const CustomHook = () => {
  debugger;
  const [data] = useFetch("https://jsonplaceholder.typicode.com/users");
  console.log(data);
  const BtnClicked = () => {
    const [count, fnInce] = useIncrement(40);
    return (
      <div>
        <button onClick={fnInce}>click here {count} time</button>
      </div>
    );
  };
  const TextHovet = () => {
    const [count, fnInce] = useIncrement(100);
    return (
      <div>
        <h2 onMouseOver={fnInce}>On Hover {count} times </h2>
      </div>
    );
  };
  return (
    <div>
      <h1>Custom Hook</h1>
      <BtnClicked />
      <TextHovet />
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.name}</p>;
        })}
    </div>
  );
};

export default CustomHook;
