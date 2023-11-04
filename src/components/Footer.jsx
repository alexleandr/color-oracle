import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Proudly made by{" "}
        <a
          href="https://github.com/alexleandr"
          target="_blank"
          tabIndex="-1"
          className={styles.footerLink}
        >
          alexleandr
        </a>
      </p>
    </footer>
  );
};

export default Footer;
