import React from "react";
import Sketch from "@uiw/react-color-sketch";
import Arrow from "../assets/arrow.svg?react";
import styles from "./Input.module.css";

const Input = ({
  color,
  setColor,
  colorPicker,
  setColorPicker,
  handleChange,
  handleSubmit,
}) => {
  function handleClick({ target }) {
    setColorPicker((current) => !current);
    target.blur();
  }

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
        <button onClick={handleClick}>
          {colorPicker ? "Click here to CLOSE" : "OR select your own color"}
        </button>

        <Sketch
          style={{ display: colorPicker ? "block" : "none" }}
          color={color}
          onChange={(color) => {
            setColor(color.hex);
          }}
          disableAlpha={true}
          className={styles.inputColorPickerSketch}
        />
      </div>
    </div>
  );
};

export default Input;
