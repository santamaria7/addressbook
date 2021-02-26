import { takeLatest } from "redux-saga/effects";
import { getUsers, getUsersWatcher } from "./getUsersSaga";

describe("Get Users", () => {
  const genObject = getUsersWatcher();

  it("should wait for latest get_users action and call getUsers", () => {
    expect(genObject.next().value).toEqual(takeLatest("get_users", getUsers));
  });

  it("should be done on next iteration", () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
