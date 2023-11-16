import React from "react";
import Arrow from "../assets/arrow.svg?react";
import styles from "./Input.module.css";

const Input = ({ handleSubmit, color, handleChange }) => {
  return (
    <form className={styles.input} onSubmit={handleSubmit}>
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
  );
};

export default Input;
