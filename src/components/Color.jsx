import React from "react";
import ClipboardCheck from "../assets/clipboard-check.svg?react";
import Clipboard from "../assets/clipboard.svg?react";
import styles from "./Color.module.css";

const Color = ({ hex }) => {
  const btn = React.useRef();
  const [copied, setCopied] = React.useState(false);

  function handleClick() {
    setCopied(true);
    copyToClipboard(hex);

    setTimeout(() => {
      setCopied(false);
      // react useRef performed better than just using ev.target in this logic
      btn.current.blur();
    }, 750);
  }

  async function copyToClipboard(code) {
    try {
      await navigator.clipboard.writeText(code);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  }

  return (
    <li className={styles.color}>
      <button style={{ backgroundColor: hex }} onClick={handleClick} ref={btn}>
        <span className={styles.copy}>
          {copied ? <ClipboardCheck /> : <Clipboard />}
        </span>
      </button>

      <div>{hex}</div>
    </li>
  );
};

export default Color;
