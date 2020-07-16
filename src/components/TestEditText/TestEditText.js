import React, { Component } from "react";
import { text2md } from './Text2MarkdownConverter'
import {LOCAL_STORAGE_KEY_TEXT} from '../../Constants'

import classes from "./TestEditText.module.css";

export default class TextEditArea extends Component {
  state = {
    text: this.props.initialText || '',
  };

  changeHandler = (event, change) => {
    const newText = event.target.value
    this.setState({
      text: newText,
    });
    localStorage.setItem(LOCAL_STORAGE_KEY_TEXT, event.target.value)
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
