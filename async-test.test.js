const fetch = require("node-fetch");
const swapi = require("./async-test.js");

it("fetching star wards people", () => {
  expect.assertions(2);

  return swapi(fetch).then(data => {
    expect(data.count).toEqual(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});
