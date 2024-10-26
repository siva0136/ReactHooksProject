import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [count, setCount] = useState(0);
  const [textArea, setTeaxtArea] = useState("This a text area");
  const [refValue, setRefValue] = useState();
  const navigation = useNavigate();
  const inuRef = useRef();
  const fnDecriment = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const fnIncrement = () => {
    setCount(count + 1);
  };
  const fnOnChange = (eve) => {
    setTeaxtArea(eve.target.value);
    // console.log(textArea);
  };
  const fnOnSubmit = (event) => {
    debugger;
    event.preventDefault();
    alert(textArea);
    console.log(textArea);
  };
  const fnGetRef = () => {
    const refText = inuRef.current.value;
    setRefValue(refText);
  };
  const fnNavigation = () => {
    navigation("/contact");
  };
  return (
    <div>
      <button onClick={fnDecriment}>Dec</button>
      <p>{count}</p>
      <button className="mb-2" onClick={fnIncrement}>
        Inc
      </button>
      <br />
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Dec
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Inc
      </button>
      <br />
      <form onSubmit={fnOnSubmit}>
        <textarea
          value={textArea}
          onChange={(eve) => fnOnChange(eve)}
        ></textarea>
      </form>
      <input type="text" ref={inuRef} />
      <button onClick={fnGetRef}>Get Ref</button>
      <p>{refValue}</p>

      <button onClick={fnNavigation}>Go To Contact Page</button>
    </div>
  );
};

export default Home;
