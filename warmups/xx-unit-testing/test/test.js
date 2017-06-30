let chai = require("chai");
let assert = chai.assert;

//import my code
let doubleX = require("../app.js");

describe("testing doubleX", () => {
    it("should return true if first x is followed by an x", () => {
        assert.equal(doubleX("xxtrex"), true);
        assert.equal(doubleX("asxxk"), true);
    });
    it("should return false if first x is not followed by an x", () => {
       assert.equal(doubleX("xex"), false);
        assert.equal(doubleX("xjxx"), false);
    });
});