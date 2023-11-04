import React from "react";
import ColorPalette from "../assets/color-palette.svg?react";

const Empty = () => {
  return (
    <div>
      <ColorPalette />
      <p>
        No colors have been entered yet. Please provide a color code to get
        started.
      </p>
    </div>
  );
};

export default Empty;
