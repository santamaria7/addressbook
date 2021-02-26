import { resetListAction } from "../resetListAction";

describe("resetListAction", function () {
  it("should return resetListAction", function () {
    const action = resetListAction();
    expect(action).toMatchObject({
      type: "reset_list",
    });
  });
});
