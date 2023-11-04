import React from "react";
import Failure from "../assets/failure.svg?react";

const Error = () => {
  return (
    <div>
      <Failure />
      <p>Only accepts hex code values!</p>
    </div>
  );
};

export default Error;
