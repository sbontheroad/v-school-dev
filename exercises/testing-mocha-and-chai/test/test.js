var chai = require("chai");
var assert = chai.assert;

//import code
var cal = require("../app.js");


describe("a calculator", function () {
    it("should return the sum of two numbers", function () {
        assert.equal(cal.add(2, 2), 4);
        assert.equal(cal.add(-1, -1), -2);
    });
    it("should return the difference of two numbers", function () {
        assert.equal(cal.sub(2, 2), 0);
        assert.equal(cal.sub(-2, 1), -3);
    });
    it("should return the product of two numbers", function () {
        assert.equal(cal.mult(2, 2), 4);
        assert.equal(cal.mult(4, 2), 8);
    });
    it("division of two numbers", function() {
        assert.equal(cal.div(4,2), 2);
    })
});
