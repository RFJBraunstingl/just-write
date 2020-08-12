import React, { Component } from "react";
import { LOCAL_STORAGE_KEY_TEXT } from "../../Constants";
import marked from "marked";

import styles from "./JustWriteArea.module.css";

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
    if (viewMode === "SIDE_BY_SIDE") return styles.TextField_SideBySide;

    return styles.TextField_Single;
  };

  render() {
    const { text } = this.state;
    const { viewMode } = this.props;
    const cssClassName = this.getCssClassForViewMode(viewMode);

    const displayTextInputField =
      viewMode === "TEXT" || viewMode === "SIDE_BY_SIDE";
    const displayMarkdownPreview =
      viewMode === "MARKDOWN" || viewMode === "SIDE_BY_SIDE";
    const displayDivider = viewMode === "SIDE_BY_SIDE";

    return (
      <div className={classes.Wrapper}>
        {displayTextInputField ? (
          <textarea
            className={[cssClassName, classes.TextField].join(" ")}
            onChange={this.changeHandler}
            value={text}
          />
        ) : null}
        {displayDivider ? <div className={classes.Divider} /> : null}
        {displayMarkdownPreview ? (
          <div
            className={[cssClassName, classes.TextField].join(" ")}
            style={{ "text-align": "left" }}
            dangerouslySetInnerHTML={{ __html: marked(text) }}
          />
        ) : null}
      </div>
    );
  }
}
