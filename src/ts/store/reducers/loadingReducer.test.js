import { loadingReducer } from "./loadingReducer";
import { resetListAction } from "../actions/resetListAction";

describe("loading reducer", function () {
  it("should return false when action is not get_users", function () {
    const reducer = loadingReducer(true, resetListAction());
    expect(reducer).toBeFalsy();
  });
});
