let chai = require('chai');
let assert = chai.assert;

let revPara = require("../app.js");

const tests = {
  entire: "(fills)",
  left: "(left)side",
  right: "right(side)",
  middle: "in(the)middle",
  single: "single(c)haracter"
}

describe("test that the characters inside of parentheses reversed", () => {
  it("should return the characters inside of the parentheses reversed", () => {
    assert.equal(revPara("something(inside)parentheses"), ("somethingedisniparentheses"));
    assert.equal(revPara(tests.entire), "sllif");
    assert.equal(revPara(tests.left), "tfelside");
    assert.equal(revPara(tests.right), "rightedis");
    assert.equal(revPara(tests.middle), "inehtmiddle");
    assert.equal(revPara(tests.single), "singlecharacter");
  })
});
