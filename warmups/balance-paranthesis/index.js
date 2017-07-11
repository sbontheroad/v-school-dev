module.exports = (str) => {
  let parArr = [];
  for(let i = 0; i < str.length; i++) {
    if(str[i] === "(") {
      parArr.push("(");
    } else if (str[i] === ")") {
      if(!parArr.length) return false;
      parArr.pop();
    }
  }
  return parArr.length === 0;
}
