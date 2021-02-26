import { searchReducer } from "../searchReducer";
import { findUserAction } from "../../actions/findUserAction";

describe("search reducer", function () {
  it("should return search object based on the payload", function () {
    const reducer = searchReducer(
      { isFiltered: false },
      findUserAction({
        first: "Marzi",
      })
    );
    expect(reducer).toMatchObject({
      isFiltered: true,
      first: "Marzi",
    });
  });
});
