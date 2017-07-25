var readlineSync = require('readline-sync');


let gameOfThree = (num) => {
  while(num !== 1) {
    if(num % 3 === 0) {
      num = num/3;
      console.log(`Divided number by three: ${num}`)
    } else if ((num + 1) % 3 === 0) {
    num = (num + 1) / 3;
    console.log(`added one and the number is ${num}`);
  } else if ((num - 1) % 3 === 0) {
    num = (num - 1) / 3;
    console.log(`substracted one and the number is ${num}`);
  }
    console.log(`The number is ${num}`);
  }

}

gameOfThree(Number(readlineSync.question("Number: ")));
​

//RECURSIVE VERSION
// let gameOfThree = (num) => {
//  //it has to have a stopping point (BASE CASE)
//  //it has call itself (RECURSION)
// ​
//  if (num === 1) {
//   console.log("The End");
//   return 1
//  } else if(num % 3 === 0){
//   console.log("Divided by 3");
//   gameOfThree(num / 3)
//  } else if ((num - 1) % 3 === 0){
//   console.log("Subtracted 1");
//   gameOfThree(num - 1);
//  } else {
//   console.log("Added 1");
//   gameOfThree(num + 1);
//  }
// }
// ​
// gameOfThree(Number(readlineSync.question("Number: ")));
