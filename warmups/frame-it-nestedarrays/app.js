let frameIt = (str) => {
  //created top and bottom value of arrays
  arr = [];
  for(let i = 0; i < str.length + 2; i++) {
    arr.push("*")
  }
  //create main array
  // let arr2 = '*' + str + '*';
  // arr2 = arr2.split('');
  let arr2 = ["*",...str.split(''),"*"];

  console.log ([arr, arr2, arr]);
  return [arr, arr2, arr];

}


module.exports = frameIt;
