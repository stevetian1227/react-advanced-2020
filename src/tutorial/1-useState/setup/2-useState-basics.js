import React, { useState } from "react";

// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handle = useState(1)[1];
  // console.log(value, handle);
  // the first parameter of useState is the value, the second is the function to make change to the value.

  const [text, setText] = useState("Original Title");
  // initial the usestate with the original value

  const handleClick = () => {
    if (text === "new title") {
      setText("hello world");
    } else {
      setText("new title");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick} type="button">
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
