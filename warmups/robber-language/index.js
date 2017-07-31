let secretLang = (str) => {
  newStr = "";
  vowel  = "aeiou";
  for(let i = 0; i < str.length; i++) {
    let isVowel = false;
    for(let x = 0; x < vowel.length; x++) {
      if(str[i] === vowel[x]) {
        isVowel = true;
        newStr += str[i];
        console.log(newStr);
        break;
      }
    }
    if (isVowel === false) {
      newStr += str[i] + "o" + str[i];
    }
  }
  console.log(newStr);
  return newStr;
}

module.exports = secretLang;
