import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "hello world"}</h1>
      <button
        className="btn"
        type="button"
        onClick={() => setIsError(!isError)}
      >
        change error state
      </button>
      {isError && <h1>Error</h1>}
      {isError ? <h1>Error</h1> : <h1>No Error</h1>}
    </>
  );
};

export default ShortCircuit;
