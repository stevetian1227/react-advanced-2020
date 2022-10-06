import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "John",
    age: 20,
    gender: "male",
    message: "My Message",
  });

  // use the spread operater to change the object.
  const changeMessage = () => {
    setPerson({ ...person, message: "New message" });
  };

  return (
    <>
      <h2>useState object example</h2>
      <h2>{person.message}</h2>
      <button type="button" onClick={changeMessage} className="btn">
        change message
      </button>
    </>
  );
};

export default UseStateObject;
