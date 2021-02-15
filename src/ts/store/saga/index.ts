import { all } from "redux-saga/effects";
import { getUsersWatcher } from "./getUsersSaga";
export default function* rootSaga() {
  yield all([getUsersWatcher()]);
}
