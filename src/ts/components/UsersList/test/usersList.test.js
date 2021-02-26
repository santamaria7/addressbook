import UsersList from "../index";
import React from "react";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import { mockStore } from "../../../../../mock";

describe("Users List", function () {
  it("should render the users list with mock redux store", function () {
    const wrapper = shallow(
      <Provider store={mockStore()}>
        <UsersList />
      </Provider>
    );
    expect(wrapper.find("UsersList").length).toEqual(1);
  });
});
