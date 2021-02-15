import { call, put, takeLatest } from "redux-saga/effects";
import { httpClient } from "../../utils/httpClient";
import { actionTypes } from "../enums";

const url = 'https://randomuser.me/api/';

function* getUsers(action: Action<undefined>) {
  try {
    const {results} = yield call<any>(httpClient, {
      method: "GET",
      url,
      data: {},
    });
    yield put({ type: actionTypes.USERS_RECEIVED, payload: results });
  } catch (err) {
    console.log(err);
    yield put({ type: "FAILURE", payload: err });
  }
}

export function* userProfileWatcher() {
  yield takeLatest(actionTypes.GET_USERS, getUsers);
}
