let half = (str) => {
  if (str.length === 0) {
    throw ("string is empty");
  }
  if (str.length % 2 === 1) {
    throw ("the string length is odd, please enter an even length string");
  }
  return str[str.length/2 - 1] + str[str.length/2];
}



module.exports = half;
