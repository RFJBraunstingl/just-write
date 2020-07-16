import React, { Component } from "react";
import { text2md } from './Text2MarkdownConverter'

import classes from "./TestEditText.module.css";

export default class TestEditText extends Component {
  state = {
    text: '# this is a title\n\n- bullet 1\n- bullet 2\n- bullet 3',
  };

  changeHandler = (event, change) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    const { text } = this.state

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
