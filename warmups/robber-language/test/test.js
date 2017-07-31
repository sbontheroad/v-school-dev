let chai = require('chai');
let assert = chai.assert;

let secretLang = require('../index.js');

// let tests = {
//
// }

describe('test of secret language function', () => {
  it('should test if consonate is doubled with an O in between', () => {
    assert.equal(secretLang("jacob"), "jojacocobob");
    // assert.equal(secretLang("hello"), "hohelollolo");
  })
})



    // assert.equal(returnString(tests.noRpt), "abcdefg");
