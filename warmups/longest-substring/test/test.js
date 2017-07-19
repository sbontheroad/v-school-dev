let chai = require("chai");
let assert = chai.assert;

let returnString = require("../app.js");

let tests = {
  noRpt: "abcdefg",
  allRpt: "aaaa",
  someRpt: "abcdabcef",
  one: "a",
  adjRpt: "hhaaapppyy",
  mix: "haapyhapp"
}

describe("test for the string before a digit repeats", () => {
  it("should return the whole string for no repeats", () => {
    assert.equal(returnString(tests.noRpt), "abcdefg");
  });
  it("")
});
