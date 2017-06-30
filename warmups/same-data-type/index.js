// let sameType = (arr) => {
//   for(let i = 0; i < arr.length; i++){
//     for(let x = 0; x < arr[i].length; x++ )
//     if(typeof arr[0][0] !== typeof arr[i][x]) {
//       return false;
//     }
//   }
//   return true;
// };

let sameType = (arr) => {
  let anchor = typeof arr[0][0];
  for (let i = 0; i < arr.length; i++) {
    for (let x = 0; x < arr[i].length; x++) {
      if(anchor !== typeof arr[i][x]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = sameType;
// sameType([3, 2], ["a", 3, 2]);
