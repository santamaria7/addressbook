import { paginationReducer } from "./paginationReducer";
import { usersReceivedAction } from "../actions/usersReceivedAction";
import { mockUser } from "../../../../mock";

describe("pagination reducer", function () {
  it("should return pagination object based on the payload", function () {
    const reducer = paginationReducer(
      {
        limit: 1000,
        offset: 1,
      },
      usersReceivedAction({
        results: [mockUser()],
        pagination: {
          offset: 10,
          seed: "test seed string",
        },
      })
    );
    expect(reducer).toMatchObject({
      limit: 1000,
      offset: 10,
      seed: "test seed string"
    });
  });
});
