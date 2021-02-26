import { findUserAction } from "./findUserAction";

describe("findUserAction", function () {
  it("should return findUserAction", function () {
    const payload = {
      first: "Marzi",
      last: "Bahri",
    };
    const action = findUserAction(payload);
    expect(action).toMatchObject({
      type: "find_user",
      payload,
    });
  });
});
