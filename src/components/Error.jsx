import React from "react";
import Failure from "../assets/failure.svg?react";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.error}>
      <Failure />
      <p>Only accepts hex code values!</p>
    </div>
  );
};

export default Error;
