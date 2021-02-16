import { call, put, takeLatest } from "redux-saga/effects";
import { httpClient } from "../../utils/httpClient";
import { actionTypes } from "../enums";

const url = 'https://randomuser.me/api/?';

function* getUsers(action: Action<getUsersPayload>) {
  try {
    const {results} = yield call<any>(httpClient, {
      method: "GET",
      url: `${url}page=${action.payload!.page}&results=${action.payload!.results}`,
      data: {},
    });
    yield put({ type: actionTypes.USERS_RECEIVED, payload: results });
  } catch (err) {
    console.log(err);
    yield put({ type: "FAILURE", payload: err });
  }
}

export function* getUsersWatcher() {
  yield takeLatest(actionTypes.GET_USERS, getUsers);
}
