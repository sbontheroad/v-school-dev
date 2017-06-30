//need to use chai for test ES5 - doesn't support ES6 yet
let chai = require("chai");
//use chai asserts, not mochas via ES5
let assert = chai.assert;

//import code ES5 - doesn't support ES6 yet
let addWord = require("../app.js").addWord;
let lookItUp = require("../app.js").lookItUp;


describe("A dictionary to look up words", () => {
    it("should store the word when added", () => {
        addWord("blueberry", "a blue berry");
        assert.equal(lookItUp("blueberry"), "a blue berry");
        addWord("flower", "pretty plant");
        assert.equal(lookItUp("flower"), "pretty plant");
    });
    it("should return null when word is not present", () => {
        assert.equal(lookItUp("flabbergasted"), null);
        assert.equal(lookItUp("building"), null);
    });
    it("should return false when word is already present", () => {
        addWord("aardvark", "ant eater");
        assert.equal(addWord("aardvark", "ant eater"), false);
        addWord("climbing", "crazy");
        assert.equal(addWord("climbing", "crazy"), false);
    });
});