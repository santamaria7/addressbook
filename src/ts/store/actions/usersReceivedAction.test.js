import { usersReceivedAction } from "./usersReceivedAction";
import { mockUser } from "../../../../mock";

describe("usersReceivedAction", function () {
  it("should return usersReceivedAction", function () {
    const payload = {
      results: [mockUser()],
      pagination: {
        offset: 10,
        seed: "test seed string",
      },
    };
    const action = usersReceivedAction(payload);
    expect(action).toMatchObject({
      type: "users_received",
      payload,
    });
  });
});
