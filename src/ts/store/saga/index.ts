import { all } from "redux-saga/effects";
import { userProfileWatcher } from "./getUsersSaga";
export default function* rootSaga() {
  yield all([userProfileWatcher()]);
}
