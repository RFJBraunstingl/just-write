import React, { Component } from "react";
import { text2md } from './Text2MarkdownConverter'

import classes from "./TestEditText.module.css";

export default class TextEditArea extends Component {
  state = {
    text: this.props.initialText || '',
  };

  changeHandler = (event, change) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    const { text } = this.state
    console.log(text)

    return (
      <div className={classes.Wrapper}>
        <textarea
          className={classes.Input}
          onChange={this.changeHandler}
          value={text} />
        <div className={classes.Divider} />
        <div
          className={classes.Output}
          dangerouslySetInnerHTML={{__html: text2md(text)}}>
        </div>
      </div>
    );
  }
}
