import UsersList from "./index";
import React from "react";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../store/saga";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {getUsersAction} from "../../store/actions/getUsersAction";

configure({ adapter: new Adapter() });
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

const store = mockStore({
  users: [],
  pagination: {
    limit: 1000,
    offset: 1,
  },
  search: {
    isFiltered: false,
  },
  loading: false,
  nationality: "",
});
sagaMiddleware.run(rootSaga);

describe("Users List", function () {
  it("should render the users list with mock redux store", function () {

    const wrapper = shallow(
      <Provider store={store}>
        <UsersList />
      </Provider>
    );
    expect(wrapper.find("UsersList").length).toEqual(1);
  });


});
