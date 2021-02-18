import { call, put, takeLatest } from "redux-saga/effects";
import { httpClient } from "../../utils/httpClient";
import { actionTypes } from "../enums";

const url = "https://randomuser.me/api/?";

function* getUsers(action: Action<getUsersPayload>) {
  const modifiedUrl = `${url}page=${action.payload!.page}&results=50${
    action.payload!.seed ? "&seed=" + action.payload!.seed : ""
  }${action.payload!.nat ? "&nat=" + action.payload!.nat : ""}`;
  try {
    const {
      results,
      info: { seed },
    } = yield call<any>(httpClient, {
      method: "GET",
      url: modifiedUrl,
      data: {},
    });
    yield put({
      type: actionTypes.USERS_RECEIVED,
      payload: {
        results,
        pagination: {
          offset: action.payload!.page,
          seed,
        },
      },
    });
  } catch (err) {
    console.log(err);
    yield put({ type: "FAILURE", payload: err });
  }
}

export function* getUsersWatcher() {
  yield takeLatest(actionTypes.GET_USERS, getUsers);
}
