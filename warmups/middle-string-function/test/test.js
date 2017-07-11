let chai = require("chai");
let assert = chai.assert;

let half = require("../app.js");

describe("test function to return middle characters of even length string", () => {
  it("should return the middle two characters of an even length string", () => {
    assert.equal(half("string"), "ri");
    assert.equal(half("johnny"), "hn");
    assert.equal(half("candycanes"), "yc");
  });
  it("should throw an error if the length of the string is odd", () => {
    assert.throws(() => {half("candycane")}, "the string length is odd, please enter an even length string");
  });
  it("should throw an error when given an empty string", () => {
    assert.throws(() => {half("")}, "string is empty");
  });
});
