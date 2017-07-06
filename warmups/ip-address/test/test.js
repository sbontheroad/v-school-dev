let chai = require("chai");
let assert = chai.assert;
let errorMessage = "invalid ip address"

let ip = require("../index.js");

describe("check if string satisfies IPv4 address naming rules", () => {
  it("should return true if it matches IPv4 rules", () => {
    assert.equal(ip("123.13.254.1"), true);
    assert.equal(ip("072.16.254.1"), true);
  });
  // it("should return false if it does not match IPv4 rules", () => {
  //   assert.equal(ip("puppy"), false);
  //   assert.equal(ip("256.256.256.256"), false);
  // });
  it("should return error if not valid IPv4 address", () => {
    //includes non-digits except for periods
    assert.throws(() => {ip("acb.erd.we.e")}, errorMessage);
    //includes special characters
    // assert.throw(() => {ip("234.+22.9.0")}, errorMessage);
    //it is not within range of 0 - 255
    assert.throws(() => {ip("355.0.07777.1")}, errorMessage);
    //doesn't contain 3 periods
    assert.throws(() => {ip("123.14.230")}, errorMessage);
    //not within range of 7-15 characters
    assert.throws(() => {ip("1.2.1.")}, errorMessage);
  });
});
