import React, { PureComponent, useState, Suspense, lazy } from "react";
import "./app.css";
import "./app.scss";
// const Lazy = lazy(() => import("./Lazy"));
import Lazy from "./Lazy.js";

const TestComp = () => {
  const [state, handleState] = useState("nothing");
  const handleClickA = () => {
    fetch("http://localhost:9000/text-api")
      .then((res) => {
        return res.text();
      })
      .then((res) => {
        const data = res;
        handleState(data);
      });
  };

  const handleClickB = () => {
    fetch("http://localhost:9000/json-api")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const data = res.name;
        handleState(data);
        console.log(res);
      });
  };

  const handleClickC = () => {
    fetch("http://localhost:9000/mongo")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        const data = res[0].name;
        handleState(data);
      });
  };

  return (
    <>
      <h1>TEST</h1>
      <button onClick={handleClickA}>get text data</button>
      <button onClick={handleClickB}>get json data</button>
      <button onClick={handleClickC}>get mongo data</button>
      <div>{state}</div>
      {/* <Suspense fallback={<div>loading...</div>}>
        <Lazy />
      </Suspense> */}
      <Lazy />
    </>
  );
};

export default TestComp;
