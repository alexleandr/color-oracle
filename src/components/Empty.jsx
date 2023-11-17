import React from "react";
import ColorPalette from "../assets/color-palette.svg?react";
import styles from "./Empty.module.css";

const Empty = () => {
  return (
    <div className={styles.empty}>
      <ColorPalette />

      <p className={styles.emptyMessage}>
        No colors have been entered yet. Please provide a color code to get
        started.
      </p>
    </div>
  );
};

export default Empty;
