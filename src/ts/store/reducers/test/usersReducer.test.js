import { usersReducer } from "../usersReducer";
import { usersReceivedAction } from "../../actions/usersReceivedAction";
import { mockUser } from "../../../../../mock";
import { emptyUsersListAction } from "../../actions/emptyUsersListAction";

describe("users reducer", function () {
  it("should return users object based on the users_received payload", function () {
    const user = mockUser();
    const reducer = usersReducer(
      [],
      usersReceivedAction({
        results: [user],
        pagination: {
          offset: 10,
          seed: "test seed string",
        },
      })
    );
    expect(reducer[0]).toMatchObject(user);
  });
  it("should return users object based on the empty_list payload", function () {
    const reducer = usersReducer([], emptyUsersListAction());
    expect(reducer).toMatchObject([]);
  });
});
