import Search from "./index";
import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { mockStore } from "../../../../mock";

describe("Search", function () {
  it("should render the Search component successfully", function () {
    const wrapper = shallow(
      <Provider store={mockStore()}>
        <Search />
      </Provider>
    );

    expect(wrapper.find("Search").length).toEqual(1);
  });
});
