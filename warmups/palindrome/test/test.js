
var chai = require("chai");
var assert = chai.assert;

//import code from app.js
var isPalindrome = require("../app.js").isPalindrome;



describe("Tests for palindrome", function() {
    it("should return true if plain word is a palindrome", function() {
        assert.equal(isPalindrome("mom"), true);
        assert.equal(isPalindrome("boB"), true);
    });
    it("should return false if plain word is not a palindrome", function() {
        assert.equal(isPalindrome("palindrome"), false);
        assert.equal(isPalindrome("banana slice"), false);
    });
    it("should return true if a palindrome has caps, special char, spaces", function () {
       assert.equal(isPalindrome("MOm!!!"), true);
        assert.equal(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"), true);
    });
});