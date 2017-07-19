let checkIfUnique = (str) => {
  //return true if string contains no duplicate letterss
  let chars = {};
  for(let i = 0; i < str.length; i++) {
    if(!chars[str[i]]) {
      chars[str[i]] = str[i];
    } else {
      return false;
    }
  }
  return true;
}



let longStr = (str) => {
  let longestSoFar = "";
  let result = [];
  for(let i = 0; i < str.length; i++) {
    for(let x = i + 1; x < str.length + 1; x++) {
      result.push(str.slice(i, x));
    }
  }
  console.log(result);

};

longStr("test");
