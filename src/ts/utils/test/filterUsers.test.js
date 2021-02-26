import { filterUsers } from "../filterUsers";

describe("filter users", function () {
  const mockList = [
    {
      name: {
        first: "Marzi",
        last: "Bahri",
      },
    },
    {
      name: {
        first: "Jafar",
        last: "Pashmak",
      },
    },
    {
      name: {
        first: "Gholi",
        last: "Ghelgheli",
      },
    },
  ];
  it("should check if a user matches with both first and last name", function () {
    const user = filterUsers(
      mockList[2],
      "Gholi",
      "Ghelgheli"
    );
    expect(user).toMatchObject({name:{
      first: "Gholi",
      last: "Ghelgheli",
    }});
  });
  it("should check if a user matches with just first name", function () {
      const user = filterUsers(
          mockList[0],
          "Marzi"
      );
      expect(user).toMatchObject({name:{
              first: "Marzi",
              last: "Bahri",
          }});
  });
  it("should check if a user matches with just last name", function () {
      const user = filterUsers(
          mockList[1],
          undefined,
          'pashmak'
      );
      expect(user).toMatchObject({name:{
              first: "Jafar",
              last: "Pashmak",
          }});
  });
  it('should return undefined if uaer does not match', function(){
      const user = filterUsers(
          mockList[1],
          undefined,
          'bagher'
      );
      expect(user).not.toBeDefined();
  })
});
