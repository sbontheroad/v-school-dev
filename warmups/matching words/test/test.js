let chai = require("chai");
let assert = chai.assert;

let matchingWords = require("../app.js").matchingWords;

describe("Testing Matching Words", () => {
    it("should return the matching words", () => {
        assert.deepEqual(matchingWords("test test no"), ["test"]);
        assert.deepEqual(matchingWords("no no yes yes"), ["no", "yes"]);
    });
    it("should return there are no matching words", () => {
        assert.deepEqual(matchingWords("no matching words").length, 0);
        assert.deepEqual(matchingWords("test").length, 0);
    });
});
