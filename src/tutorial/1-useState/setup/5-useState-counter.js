import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const handleIncrement = () => {
    setValue(value + 1);
  };
  const handleDecrement = () => {
    setValue(value - 1);
  };
  const handleReset = () => {
    setValue(0);
  };
  // as the code is async, the value doesn;t change multiple times if clicked
  // to fix this problem a call back in the setValue methodis used to change the actual value
  const handleComplex = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>Counter</h2>
        <h1>{value}</h1>
        <button type="button" onClick={handleIncrement} className="btn">
          Increment
        </button>
        <button type="button" className="btn" onClick={handleReset}>
          Reset
        </button>
        <button type="button" className="btn" onClick={handleDecrement}>
          Decrement
        </button>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={handleComplex}>
          Complex Increment
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
