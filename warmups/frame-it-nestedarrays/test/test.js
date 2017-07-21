let chai = require("chai");
let assert = chai.assert;

let frameIt = require("../app.js");

describe("test the frame it function", () => {
  it("should create a nested array", () => {
    assert.deepEqual(frameIt("it"), [["*","*","*","*"], ["*","i","t","*"], ["*","*","*","*"]]);
    assert.deepEqual(frameIt("pic"), [["*","*","*","*","*"], ["*","p","i","c","*"], ["*","*","*","*","*"]]);
  });
});
