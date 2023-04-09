import React, { PureComponent, useState } from "react";

const TestComp = () => {
  const [state, handleState] = useState("nothing");
  const handleClick = () => {
    fetch("http://localhost:9000/api")
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        const data = res;
        handleState(data);
      });
  };

  return (
    <>
      <h1>TEST</h1>
      <button onClick={handleClick}>get data</button>
      <div>{state}</div>
    </>
  );
};

export default TestComp;
