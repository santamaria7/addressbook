import { nationalityReducer } from "../nationalityReducer";
import { setNationalityAction } from "../../actions/setNationalityAction";

describe("nationality reducer", function () {
  it("should return nationality based on the payload", function () {
    const reducer = nationalityReducer("CH", setNationalityAction("ES"));
    expect(reducer).toEqual("ES");
  });
});
