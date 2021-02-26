import renderer from "react-test-renderer";
import HomePage from "../index";
import React from "react";
import { Provider } from "react-redux";
import { mockStore } from "../../../../../mock";
import { shallow } from "enzyme";

describe("HomePage", function () {
  it("should render home page - with snapshot", function () {
    const component = renderer.create(
      <Provider store={mockStore()}>
        <HomePage />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should render home page - without snapshot", function () {
    const wrapper = shallow(
      <Provider store={mockStore()}>
        <HomePage />
      </Provider>
    );
    expect(wrapper.find("HomePage").length).toEqual(1);
  });
});
