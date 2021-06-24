import React, { Component } from "react";
import PropTypes from "prop-types";

class ImageToggleButton extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    onIndexChanged: PropTypes.func,
  };

  state = {
    imageIndex: 0,
  };

  handleOnClick = () => {
    this.setState(({ imageIndex: oldIndex }) => {
      const newIndex = (oldIndex + 1) % this.props.images.length;

      if (this.props.onIndexChanged) this.props.onIndexChanged(newIndex);

      return {
        imageIndex: newIndex,
      };
    });
  };

  render() {
    const { images } = this.props;

    return (
      <div onClick={this.handleOnClick}>
        <img src={images[this.state.imageIndex]} alt="" />
      </div>
    );
  }
}

export default ImageToggleButton;
