let prime = (int) => {
    let count = 1;
    for(let i = 1; i <= int/2; i++){
      if(int % i === 0) {
        count ++;
      }
    }
  //   if(count === 2) {
  //     return "prime";
  // } else {
  //     return count;
  // }
  return count === 2 ? "prime" : count;
}

module.exports = prime;
