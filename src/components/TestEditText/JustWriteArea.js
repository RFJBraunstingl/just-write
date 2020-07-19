import React, { Component } from "react";
import { LOCAL_STORAGE_KEY_TEXT } from "../../Constants";
import marked from "marked";

import classes from "./JustWriteArea.module.css";
import ViewModeToggleButton from "../ViewModeToggleButton/ViewModeToggleButton";

export default class JustWriteArea extends Component {
  state = {
    text: this.props.initialText || "",
  };

  changeHandler = (event, change) => {
    const newText = event.target.value;
    this.setState({
      text: newText,
    });
    localStorage.setItem(LOCAL_STORAGE_KEY_TEXT, event.target.value);
  };

  getCssClassForViewMode = (viewMode) => {
    if (viewMode === "SIDE_BY_SIDE") return classes.TextField_SideBySide;
  };

  render() {
    const { text } = this.state;
    const { viewMode } = this.props;
    const cssClassName = this.getCssClassForViewMode(viewMode);

    const displayTextInputField =
      viewMode === "TEXT" || viewMode === "SIDE_BY_SIDE";
    const displayMarkdownPreview =
      viewMode === "MARKDOWN" || viewMode === "SIDE_BY_SIDE";

    return (
      <div className={classes.Wrapper}>
        {displayTextInputField ? (
          <textarea
            className={cssClassName}
            onChange={this.changeHandler}
            value={text}
          />
        ) : null}
        <div className={classes.Divider} />
        {displayMarkdownPreview ? (
          <div
            className={cssClassName}
            dangerouslySetInnerHTML={{ __html: marked(text) }}
          />
        ) : null}
      </div>
    );
  }
}
