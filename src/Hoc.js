import React from "react";
import { useState } from "react";
const HocFn = (Comp) => {
  const MyOwn = () => {
    const [count, setCount] = useState(0);
    const fnClick = () => {
      setCount(count + 1);
    };
    return <Comp count={count} fnClick={fnClick} />;
  };
  return MyOwn;
};

const BtnClicked = HocFn(({ count, fnClick }) => {
  return <button onClick={fnClick}>Cilck me {count}time</button>;
});
const TextHovet = HocFn(({ count, fnClick }) => {
  return <h2 onMouseOver={fnClick}>Cilck me {count}time</h2>;
});
const Hoc = () => {
  return (
    <div>
      <h1>Hoc</h1>
      <BtnClicked />
      <TextHovet />
    </div>
  );
};

export default Hoc;
