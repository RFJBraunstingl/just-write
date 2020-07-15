import React, { Component } from "react";

import classes from "./TestEditText.module.css";

export default class TestEditText extends Component {
  state = {
    text: "",
  };

  changeHandler = (event, change) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div className={classes.Wrapper}>
        <textarea 
          className={classes.Input} 
          onChange={this.changeHandler} 
          value={'# this is a title\n\n- bullet 1\n- bullet 2\n- bullet 3'}/>
        <div className={classes.Divider} />
        <div className={classes.Output}>
          <h1>This is a title</h1>
          <ul>
            <li>bullet 1</li>
            <li>bullet 2</li>
            <li>bullet 3</li>
          </ul>
        </div>
      </div>
    );
  }
}
