import React from "react";
import ClipboardCheck from "../assets/clipboard-check.svg?react";
import Clipboard from "../assets/clipboard.svg?react";
import styles from "./Color.module.css";

const Color = ({ hex }) => {
  const [copied, setCopied] = React.useState(false);

  function handleClick() {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <li className={styles.color}>
      <button style={{ backgroundColor: hex }} onClick={handleClick}>
        <span className={styles.copy}>
          {copied ? <ClipboardCheck /> : <Clipboard />}
        </span>
      </button>

      <div>{hex}</div>
    </li>
  );
};

export default Color;
