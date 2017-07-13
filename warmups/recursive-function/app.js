let recRepeat = (str, int) => {
  if(int < 0) {
    throw "neg int";
  } else if (int === 0) {
    throw "int is zero";
  } else if (str === "") {
    throw "empty string";
  } else if (int === 1) {
    return str;
  } else {
    console.log(str + (recRepeat(str, int - 1)));
    return str + (recRepeat(str, int - 1));
  }
}

module.exports = recRepeat;
