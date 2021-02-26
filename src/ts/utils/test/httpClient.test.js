/**  * @jest-environment jsdom-sixteen  */

import { httpClient, setUpRequestHeaders } from "../httpClient";
import { waitFor } from "@testing-library/dom";

describe("httpClient", function () {
  it("should send an xhr request  based on the payload", async function () {
    const data = await httpClient({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/todos/1",
      hasHeader: true,
      headers: {
        "content-type": "application/json",
      },
    });

    await waitFor(() => {
      expect(data).toBeDefined();
    });
  });
});
