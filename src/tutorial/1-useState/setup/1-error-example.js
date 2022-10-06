import React from "react";

const ErrorExample = () => {
  let title = "Random Title";
  // hasn't rerendered so no change
  const handleClick = () => {
    console.log(title);
  };
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" onClick={handleClick} className="btn">
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
