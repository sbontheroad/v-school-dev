let chai = require("chai");
let assert = chai.assert;

let recRepeat = require("../app.js");

let tests = {
  generic: {
    string: "test",
    int: 5
  },
  negative: {
    string: "test",
    int: -1
  },
  zero: {
    string: "test",
    int: 0
  },
  empty: {
    string: "",
    int: 3
  }
}

describe("test of recursive function", () => {
  it("should return a repeat of the str", () => {
    assert.equal(recRepeat(tests.generic.string, tests.generic.int), "testtesttesttesttest");
    // assert.equal(recRepeat("dog", 1), "dogdog");
  });
  it("should throw an error if the int is negative", () => {
    assert.throws(() => {recRepeat(tests.negative.string, tests.negative.int), "neg int"});
  });
  it("should throw an error if the int is empty", () => {
    assert.throws(() => {recRepeat(tests.empty.string, tests.empty.int), "empty string"});
  });
  it("should throw error if the int is 0", () => {
    assert.throws(() => {recRepeat(tests.zero.string, tests.zero.int), "int is zero"});
  });
});


// assert.equals(recRepeat("what is your name?"), "what is your name?what is your name?");
// assert.equals(recRepeat("dog"), "dogdog");
