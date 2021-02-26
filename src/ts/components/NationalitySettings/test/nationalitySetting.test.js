/**  * @jest-environment jsdom-sixteen  */

import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen } from "@testing-library/react";
import { mockStore } from "../../../../../mock";
import { Provider } from "react-redux";
import NationalitySettings from "../index";
import { waitFor } from "@testing-library/dom";

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
    const component = renderer.create(
      <Provider store={mockStore()}>
        <NationalitySettings />
      </Provider>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should change the select value successfully", async function () {
    render(
      <Provider store={mockStore()}>
        <NationalitySettings />
      </Provider>
    );
    const element = screen.getByLabelText("Set preferred nationality:");
    fireEvent.change(element, { target: { value: "GB" } });
    await waitFor(() => {
      expect(element.value).toEqual("GB");
    });
  });
  it("should submit form successfully", async function () {
    render(
      <Provider store={mockStore()}>
        <NationalitySettings />
      </Provider>
    );
    const form = screen.getByRole("form");
    const value = screen.getByLabelText("Set preferred nationality:").value;
    fireEvent.submit(form);
    await waitFor(() => {
      //TODO don't use localStorage for test, always failing
      expect(localStorage.getItem("nat")).toEqual(value);
    });
  });
});
