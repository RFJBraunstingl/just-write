/**
 * This component displays the 'viewMode' setting button.
 *
 * It extends the ImageToggleButton component by mapping the view modes JustWrite offers
 * to image assets.
 *
 * Currently, there are three modes available
 * 1. Text Mode
 * 2. Markdown Mode
 * 3. Side-by-Side Mode
 *
 * When the mode changes, this components provides an API in the form of a callback prop
 * which is called 'onViewModeChange', it will call whatever function is passed in this
 * prop with the new view mode as only argument.
 *
 * The view mode argument is represented by a string which can have one of the following
 * three values:
 * 1. TEXT
 * 2. MARKDOWN
 * 3. SIDE_BY_SIDE
 */
import React, { Component } from "react";
import cssClasses from "./ViewModeToggleButton.module.css";
import ImageTextMode from "../../assets/img/image_white.svg";
import ImageMarkdownMode from "../../assets/img/image_filled.svg";
import ImageSideBySideMode from "../../assets/img/image_compare.svg";
import PropTypes from "prop-types";
import ImageToggleButton from "../ImageToggleButton/ImageToggleButton";

export const VIEW_MODE_TEXT = "TEXT";
export const VIEW_MODE_MARKDOWN = "MARKDOWN";
export const VIEW_MODE_SIDE_BY_SIDE = "SIDE_BY_SIDE";

const images = [ImageTextMode, ImageMarkdownMode, ImageSideBySideMode];
const imageIndexViewModeMap = {
  0: VIEW_MODE_TEXT,
  1: VIEW_MODE_MARKDOWN,
  2: VIEW_MODE_SIDE_BY_SIDE,
};

class ViewModeToggleButton extends Component {
  static propTypes = {
    onViewModeChanged: PropTypes.func,
  };

  onImageButtonIndexChanged = (imageIndex) => {
    const newViewMode = imageIndexViewModeMap[imageIndex];

    const { onViewModeChanged } = this.props;
    if (onViewModeChanged) onViewModeChanged(newViewMode);
  };

  render = () => (
    <div className={cssClasses.ViewModeToggleButton}>
      <ImageToggleButton
        onIndexChanged={this.onImageButtonIndexChanged}
        images={images}
      />
    </div>
  );
}

export default ViewModeToggleButton;
