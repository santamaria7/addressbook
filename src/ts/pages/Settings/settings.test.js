import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {mockStore} from "../../../../mock";
import React from "react";
import Settings from "./index";
import {shallow} from "enzyme";

jest.mock("react-router-dom", () => {
    const originalModule = jest.requireActual("react-router-dom");
    return {
        ...originalModule,
        useHistory: () => ({
            goBack: jest.fn(),
        }),
    };
});

describe("SettingsPage", function () {
    it("should render settings page - with snapshot", function () {
        const component = renderer.create(<Provider store={mockStore()}>
            <Settings />
        </Provider>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("should render settings page - without snapshot", function () {
        const wrapper = shallow(
            <Provider store={mockStore()}>
                <Settings />
            </Provider>
        );
        expect(wrapper.find("Settings").length).toEqual(1);
    });
});