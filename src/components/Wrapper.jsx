import React from "react";
import Input from "./Input";
import Empty from "./Empty";
import Error from "./Error";
import Result from "./Result";
import styles from "./Wrapper.module.css";

const Wrapper = () => {
  const [color, setColor] = React.useState("");
  const [colorPicker, setColorPicker] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [result, setResult] = React.useState(false);
  const regex = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i;

  function handleSubmit(ev) {
    ev.preventDefault();
    setColorPicker(false);

    if (color.startsWith("#")) {
      validateRegex(color);
    } else {
      validateRegex("#" + color);
    }
  }

  function handleChange({ target }) {
    setColor(target.value);
    setColorPicker(false);
    setResult(false);
    setError(false);
  }

  function validateRegex(hexCode) {
    if (regex.test(hexCode)) {
      setResult(true);
      setError(false);
    } else {
      setResult(false);
      setError(true);
    }
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.wrapperLogo}>
        <h1>
          Color <span>Oracle</span>
        </h1>

        <p>Enter a Hex color code for a range of color tints and shades</p>
      </div>

      <Input
        color={color}
        setColor={setColor}
        colorPicker={colorPicker}
        setColorPicker={setColorPicker}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />

      {!result && !error && <Empty />}
      {error && <Error />}
      {result && (
        <Result userColor={color.startsWith("#") ? color : `#${color}`} />
      )}
    </main>
  );
};

export default Wrapper;
