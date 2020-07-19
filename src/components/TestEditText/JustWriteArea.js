import React, { Component } from "react";
import { LOCAL_STORAGE_KEY_TEXT } from "../../Constants";
import marked from "marked";

import classes from "./JustWriteArea.module.css";

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

  render() {
    const { text } = this.state;

    return (
      <div className={classes.Wrapper}>
        <textarea
          className={classes.Input}
          onChange={this.changeHandler}
          value={text}
        />
        <div className={classes.Divider} />
        <div
          className={classes.Output}
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
      </div>
    );
  }
}
