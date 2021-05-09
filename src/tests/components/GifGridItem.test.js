import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import { GifGridItem } from "../../components/GifGridItem";

describe("Test over GifGridItem component", () => {
  const title = "Elemento individual a renderizar";
  const port = 3000;
  const url = process.env.HOST_LOCAL || `http://localhost:${port}`;
  const id = "12345";
  let wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should show a paragraph with the title text", () => {
    const textRendered = wrapper.find("p").text();
    expect(textRendered).toBe(title);
  });

  test("should to have an image with url and alt", () => {
    const imgRendered = wrapper.find("img");
    expect(imgRendered.prop("src")).toBe(url);
    expect(imgRendered.prop("alt")).toBe(title);
  });

  test("should has class animate__fadeIn", () => {
    const className = "animate__fadeIn";
    const cssRendered = wrapper.find("div");

    expect(cssRendered.prop("className")).toContain(className);
  });
});
