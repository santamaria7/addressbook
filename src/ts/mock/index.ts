import configureMockStore from "redux-mock-store";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../store/saga";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
export function mockStore(){
    configure({ adapter: new Adapter() });
    const sagaMiddleware = createSagaMiddleware();
    const mockStoreAPI = configureMockStore([sagaMiddleware]);

    const store = mockStoreAPI({
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
    return store
}