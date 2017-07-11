let chai = require("chai");
let assert = chai.assert;

let balancePar = require("../index.js");

describe("testing if parenthesis balance", () => {
  it("should return true if all paras are closed", () => {
    assert.equal(balancePar("(((())))"), true);
  });
  it("should return false if all parenthesis don't close", () => {
    assert.equal(balancePar("()))))"), false);
  });
  it("should return false if there's a closing parenthesis and no opening", () => {
    assert.equal(balancePar(")noopeningpar"), false);
  });
  it("should return false if no closing para", () => {
    assert.equal(balancePar("balancePar("), false);
  });
})
