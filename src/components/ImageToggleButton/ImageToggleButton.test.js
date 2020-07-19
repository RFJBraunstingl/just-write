import React from "react";
import { shallow } from "enzyme";
import ImageToggleButton from "./ImageToggleButton";
import Image1 from "../../assets/img/image_compare.svg";
import Image2 from "../../assets/img/image_filled.svg";
import Image3 from "../../assets/img/image_white.svg";

describe("ImageToggleButton", () => {
  let wrapper;
  const images = [Image1, Image2, Image3];

  beforeEach(() => {
    wrapper = shallow(<ImageToggleButton images={images} />);
  });

  it("displays image with index zero initially", () => {
    expect(wrapper.find("img").prop("src")).toBe(images[0]);
  });

  it("displays subsequent images when clicking", () => {
    let index = 0;
    wrapper.simulate("click");
    index++;
    expect(wrapper.find("img").prop("src")).toBe(images[index]);
    wrapper.simulate("click");
    index++;
    expect(wrapper.find("img").prop("src")).toBe(images[index]);
  });

  it("displays image with index zero when reaching end of array", () => {
    const numberOfImages = images.length;
    const indexOfLastImage = numberOfImages - 1;
    wrapper.setState({ imageIndex: indexOfLastImage });

    wrapper.simulate("click");

    expect(wrapper.find("img").prop("src")).toBe(images[0]);
  });

  it("calls the onIndexChanged callback with the new index when clicked", () => {
    const callbackMock = jest.fn(() => {});
    wrapper.setProps({ onIndexChanged: callbackMock });

    wrapper.simulate("click");

    const expectedNewIndex = 1;
    expect(callbackMock).toHaveBeenCalledWith(expectedNewIndex);
  });
});
