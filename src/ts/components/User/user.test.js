import React from "react";
import renderer from "react-test-renderer";
import User from "./index";
import { mockUser } from "../../../../mock";
const { act } = renderer;

describe("render user component", function () {
  it("should render user component with mock data", function () {
    const component = renderer.create(<User user={mockUser()} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    act(() => {
      tree.props.onClick();
      // re-rendering
      tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
