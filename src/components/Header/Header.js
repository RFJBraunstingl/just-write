import React from "react";
import classes from "./Header.module.css";
import ViewModeToggleButton from "../ViewModeToggleButton/ViewModeToggleButton";

const Header = (props) => (
  <div className={classes.Header}>
    <div>{/* Placeholder */}</div>
    <span>Just Write</span>
    <ViewModeToggleButton onViewModeChanged={props.onViewModeChanged} />
  </div>
);

export default Header;
