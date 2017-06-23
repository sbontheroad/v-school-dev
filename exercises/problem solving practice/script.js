//Write a function that will return true if the number is odd or false if the number is even.
//write a function that takes a number as input
//function isOdd(num) {
//    if (num % 2 === 0) {
//        return (false);
//    } else {
//        return (true);
//    }
//};
//
//console.log(isOdd(7));


//return the number as a negative number.  If it is already negative return the number as it is.
//return number as a negative
//function negative(num) {
//    if(num > 0) {
//        return -num;
//    } else {
//        return num;
//    }
//}
//
//console.log(negative(45));

//reverse the given array and return it
//function reverseArrayEasy(arr) {
//    //print the array
//    console.log(arr);
//    //reverse the array
//    return arr.reverse();
//    
//}
//
//console.log(reverseArrayEasy([2, 5, 3]));

//reverse the given array and return it
//function reverseArrayHard(arr) {
//    newArr = [];
////    for (i = arr.length - 1; i >= 0; i--) {
////        newArr.push(arr[i]);
////    }
////    return newArr;
////}
////
////console.log(reverseArrayHard([2, 5, 3]));
//
////return the number of vowels in a sentence
////loop through array
////create var to compare against loop
//
////if var[i] === vowel store in new array
//var vowelArray = [];
//
////
//add vowel into count
//count =+ 1;
////share new array

//This is a sentence
var vowels = ["a", "e", "i", "o", "u"];
var count = 0;
function vowelCount(str) {
    var lowerStr = str.toLowerCase();
    for(var i = 0; i < lowerStr.length; i++) {
      for(var x = 0; x < vowels.length; x++) {
          if(lowerStr[i] === vowels[x]) {
              count += 1;
          }
      } 
    }
    return count;
}

console.log(vowelCount("This Is a sente"));