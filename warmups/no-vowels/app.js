let disemvowel = (str) => {
    let stringDoe = {
        corpse: "",
        guts: ""
    };
    let vowels = "aeiou ";
    str = str.toLowerCase();

    for(i=0;i<str.length;i++){
      vowels.includes(str[i]) ? stringDoe.guts += str[i] : stringDoe.corpse += str[i];
    }

    return stringDoe;
}



let chai = require("chai");
let assert = chai.assert;

let noVowels = require("../index.js");

describe("A function that takes away spaces and vowels from a string and returns the string and the vowels", () => {
  it("should return an object with the str with no vowels and a string of the vowels removed", () => {
    assert.deepEqual(noVowels("allen"), {noVowels: "lln", vowels: "ae"});
    assert.deepEqual(noVowels("smash"), {noVowels: "smsh", vowels: "a"});
  });
  it("should return an object with the str with no vowels/no spaces and a string of the vowels removed", () => {
    assert.deepEqual(noVowels("poop is amazing"), {noVowels: "ppsmzng", vowels: "ooiaai"});
    assert.deepEqual(noVowels("a cockatoo sat perched"), {noVowels: "ccktstprchd", vowels: "aoaooaee"});
  });
});



```./index.js```
let noVowels = (str) => {
  let result = {noVowels: "", vowels: ""};
  for(let i = 0; i < str.length; i++) {
    if("aeiou".includes(str[i])) {
      result.vowels += str[i];
    } else if(str[i] !== " ") {
      result.noVowels += str[i];
    }
  }
  return result;
}

module.exports = noVowels;
