import React from "react";
import Empty from "./Empty";

const Wrapper = () => {
  return (
    <main>
      <div>
        <h1>
          Color <span>Oracle</span>
        </h1>
        <p>Enter a Hex color code for a range of color tints and shades</p>
      </div>

      <form>
        <input type="text" maxLength="6" />
        <button type="submit">Arrow</button>
      </form>

      <Empty />
    </main>
  );
};

export default Wrapper;
