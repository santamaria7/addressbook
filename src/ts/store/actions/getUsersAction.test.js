import { getUsersAction } from "./getUsersAction";

describe("getUsersAction", function () {
  it("should return getUsersAction", function () {
    const payload = {
      page: 100,
      seed: "test string",
      nat: "CH",
    };
    const action = getUsersAction(payload);
    expect(action).toMatchObject({
      type: "get_users",
      payload,
    });
  });
});
