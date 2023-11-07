import React from "react";
import Color from "./Color";
import styles from "./Result.module.css";

// just for UI development
const colors = [
  "#ffffff",
  "#ffeced",
  "#ffd9da",
  "#ffc6c8",
  "#ffb3b5",
  "#ffa0a3",
  "#ff8d91",
  "#ff7a7e",
  "#ff676c",
  "#ff5459",
  "#ff4147",
  "#e63b40",
  "#cc3439",
  "#b32e32",
  "#99272b",
  "#802124",
  "#661a1c",
  "#4d1415",
  "#330d0e",
  "#190607",
  "#000000",
];

const Result = ({ hexCode }) => {
  return (
    <div className={styles.result}>
      <h4 className={styles.yourColor}>
        {hexCode.startsWith("#") ? hexCode : `#${hexCode}`}
      </h4>

      <ul className={styles.colors}>
        {colors.map((color) => (
          <Color key={color} hex={color} />
        ))}
      </ul>
    </div>
  );
};

export default Result;
