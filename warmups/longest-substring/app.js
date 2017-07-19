let longStr = (str) => {
  let result = [];
  for(let i = 0; i < str.length; i++) {
    for(let x = i + 1; x < str.length + 1; x++) {
      result.push(str.slice(i, x));
    }
  }
  console.log(result);

};

longStr("test");
