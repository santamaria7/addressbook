import { emptyUsersListAction } from "./emptyUsersListAction";

describe("emptyUsersListAction", function () {
  it("should return emptyUsersListAction", function () {
    const action = emptyUsersListAction();
    expect(action).toMatchObject({
      type: "empty_list",
    });
  });

});
