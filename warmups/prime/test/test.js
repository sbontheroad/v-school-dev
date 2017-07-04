let chai = require("chai");
let assert = chai.assert;

let prime = require("../index.js");

describe("testing something about prime", () => {
  it("testing is not prime, get factors", () => {
    assert.equal(prime(10), 4);
    assert.equal(prime(24), 8);
  });
  it("test is prime", () => {
    assert.equal(prime(7), "prime");
    assert.equal(prime(5), "prime");
  })
});
