let fizzBuzz = () => {

  let newArr = [];
  for(let i = 1; i <= 20; i++) {
    if(i % 5 ===0 && i % 3 === 0) {
      newArr.push("FizzBuzz");
    } else if (i % 5 === 0) {
      newArr.push("Buzz");
    } else if(i % 3 === 0) {
      newArr.push("Fizz");
    } else {
      newArr.push(i);
    }
  }
  return newArr;
};

module.exports = fizzBuzz;
