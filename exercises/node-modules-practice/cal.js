

let add = (num1, num2) => {
  return num1 + num2;
}

let subtract = (num1, num2) => {
  return num1 - num2
}

let multiply = (num1, num2) => {
  return num1 * num2
}

let divide = (num1, num2) => {
  return num1 / num2
}

let modulus = (num1, num2) => {
  return num1 % num2
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulus
}


//same as export default add.  Export default add is ES6.  Node doesn't understand export/import of es6
