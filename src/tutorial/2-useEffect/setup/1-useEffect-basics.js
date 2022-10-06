import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(1);

  // second parameter is dependencies, if empty then only run the first funciton the first time the page renders
  // if doesn't put the second parameter, then everytime rerendered
  useEffect(() => {
    document.title = `New Message ${value}`;
  }, [value2]);
  return (
    <>
      <h1>value1:{value}</h1>
      <h1>value2:{value2}</h1>
      <button className="btn" type="button" onClick={() => setValue(value + 1)}>
        Click me
      </button>
      <button
        className="btn"
        type="button"
        onClick={() => setValue2(value2 + 5)}
      >
        Click me2
      </button>
    </>
  );
};

export default UseEffectBasics;
