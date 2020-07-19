import React from "react";
import css from "./Footer.module.css";

const Footer = () => (
  <div className={css.Footer}>
    <span>{process.env.REACT_APP_VERSION}</span>
  </div>
);

export default Footer;
