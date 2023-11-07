import React from "react";
import Values from "values.js";
import Color from "./Color";
import styles from "./Result.module.css";

const Result = ({ hexCode }) => {
  const [colors, setColors] = React.useState([]);

  React.useEffect(() => {
    let values = new Values(hexCode).all(10);
    setColors(values);
  }, []);

  return (
    <div className={styles.result}>
      <h4 className={styles.yourColor}>{hexCode}</h4>

      <ul className={styles.colors}>
        {
          /* this ensures we don't render repeated colors */
          colors
            .filter(
              (color, index, self) =>
                self.findIndex((c) => c.hex === color.hex) === index
            )
            .map((color, index) => (
              <Color key={index} hex={`#${color.hex}`} />
            ))
        }
      </ul>
    </div>
  );
};

export default Result;
