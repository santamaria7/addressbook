import { setNationalityAction } from "../setNationalityAction";

describe("setNationalityAction", function () {
  it("should return setNationalityAction", function () {
    const action = setNationalityAction("CH");
    expect(action).toMatchObject({
      type: "set_nationality",
      payload: "CH",
    });
  });
});
