let chai = require("chai");
let assert = chai.assert;

let nearHundred = require("../index.js")

describe("Test of nearHundred", () => {
  it("should return true if within 10 of 100 or 200", () => {
    assert.equal(nearHundred(210), true);
    assert.equal(nearHundred(91), true);
  });
  it("should return false if not within 10 of 100 or 200", () => {
    assert.equal(nearHundred(211), false);
    assert.equal(nearHundred(89), false);
  });
});
