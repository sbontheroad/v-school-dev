let chai = require("chai");
let assert = chai.assert;

let sameType = require("../index.js");

describe("Test to see if two arrays are the same data type", () => {
  it("should return true if the data types are the same", () => {
    assert.deepEqual(sameType([[1,2,3],[4, 2, 3]]), true);
    assert.deepEqual(sameType([[4,5,6],[7,8,9]]), true);
  });
  it("should return false if two arrays are not of the same data type", () => {
    assert.deepEqual(sameType([3, "b", true]), false);
    assert.deepEqual(sameType([[3, 2], ["a", 3, 2]]), false);
  });
});
