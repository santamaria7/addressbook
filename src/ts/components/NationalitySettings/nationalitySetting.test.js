import React from "react";

import { mockStore } from "../../../../mock";
import { Provider } from "react-redux";
import NationalitySettings from "./index";
import { shallow } from "enzyme";

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    ...originalModule,
    useHistory: () => ({
      goBack: jest.fn(),
    }),
  };
});

describe("NationalitySetting Component", function () {
  it("should render nationality settings successfully", function () {
    const wrapper = shallow(
      <Provider store={mockStore()}>
        <NationalitySettings />
      </Provider>
    );

    expect(wrapper.find("NationalitySettings").length).toEqual(1);
  });
});
