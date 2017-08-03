// Make a date object for todays date then print the date (edited)
// Make a date object containing yesterdays date then print the date
// Make a date object containing tomorrows date then print the date

// let date = new Date();
// let today = date.toLocaleDateString();
// console.log(today);
//
// let yesterday = date.setDate(today.getDate() - 1);
// console.log(yesterday.toLocaleDateString());
//
// // let tomorrow = date.setDate(today.getDate()) + 1;
//
// console.log(yesterday);
//
// ///Make a date object for todays date then print the date
// let today = new Date();
// console.log(today.toLocaleDateString());
//
// //Make a date object containing yesterdays date then print the date
// let yesterday = new Date();
// yesterday.setDate(today.getDate() - 1);
// console.log(yesterday.toLocaleDateString());
//
// //Make a date object containing tomorrows date then print the date
// let tomorrow = new Date();
// tomorrow.setDate(today.getDate() + 1);
// console.log(tomorrow.toLocaleDateString());

// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();

// Write a function that returns the number of seconds since midnight Jan 1 1970
let n = (Date.now())/1000;
console.log(n);
