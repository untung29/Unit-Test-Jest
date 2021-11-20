const googleSearch = require("./index");
const dbMock = ["dog.com", "cheesepuff.com", "disney.com", "dogpictures.com"];

describe("Google Search Algorithm Test", () => {
  it("this is a test", () => {
    googleSearch("testtest", dbMock);
  });

  it("google search", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
  });

  it("null and undefined", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("length 3", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
