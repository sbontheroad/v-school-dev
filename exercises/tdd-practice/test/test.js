var chai = require("chai");
var assert = chai.assert;

//import code
var funct = require("../app.js");

describe("Testing last digit app", function() {
   it("this test should be true", function() {
       assert.equal(funct.lastNum(34, 28874), true);
   });
    it("this test should be false", function() {
        assert.equal(funct.lastNum(342, 567), false);
    });
});

describe("testing remove char app", function() {
    it("remove first and last chars", function() {
        assert.equal(funct.middle("hello"), "ell");
        assert.equal(funct.middle("hi"), "");
    });
});