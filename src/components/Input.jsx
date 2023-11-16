import React from "react";
import Sketch from "@uiw/react-color-sketch";
import Arrow from "../assets/arrow.svg?react";
import styles from "./Input.module.css";

const Input = ({ color, setColor, handleChange, handleSubmit }) => {
  return (
    <div className={styles.input}>
      <form className={styles.inputForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Hex code"
          maxLength="7"
          value={color}
          onChange={handleChange}
        />

        <button type="submit">
          <Arrow />
        </button>
      </form>

      <div className={styles.inputColorPicker}>
        <button>OR select your own color</button>

        <Sketch
          color={color}
          onChange={(color) => {
            setColor(color.hex);
          }}
          disableAlpha={true}
        />
      </div>
    </div>
  );
};

export default Input;
