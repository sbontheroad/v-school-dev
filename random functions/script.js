// WARMUP:
// Given a positive integer, write a function that returns how many unique factors it has. Return `prime` if it only has 2.
// for example:  `getFactors(10)` will return `4` because the factors of 10 are 1,2,5, and 10.
// another example: `getFactors(7)` will return `prime` because 7 is a prime number. YOU WILL NEED TO MAKE A UNIT TEST
// test for prime-ness as well as the correct number of factors.




// Return true if the given string contains between 1 and 3 'e' chars.
// let ePresent = (str) => {
//   let count = 0;
//   for(let x = 0; x < str.length; x++) {
//     if(str[x] === "e") {
//       count++;
//     }
//   }
//   if(count >= 1 && count <= 3) {
//     console.log(true);
//   } else {
//
//   console.log(false);
//   }
// };
//
// ePresent("fasdeeeef");


//
//let str = "test string";
//let checkNot = str.slice(0, 3);
//  if(checkNot.includes("not")) {
//    console.log(str);
//  } else {
//    console.log("not " + str);
//  }

// We have a loud talking parrot. The 'hour' parameter is the //current hour
// time in the range 0..23. We are in trouble if the parrot is //talking and
// the hour is before 7 or after 20.
// Return true if we are in trouble or false if we are safe

// let parrotTrouble= (talking, hour) => {
//     if(hour < 7 || hour > 20 && talking === true) {
//         console.log("You are in trouble");
//     } else {
//         console.log("you are not in trouble");
//     }
// }
//
// let d = new Date();
// let h = d.getHours();
//
// parrotTrouble(true, h);


////find longest word in a string, excluding punctuation. If there are two words of the same length, return the first.
//
//var longest = function(sen) {
//    var noPunct = sen.match(/[a-z0-9]+/gi);
//    var lengthLongestWord = 0;
//    var longestWord = "";
//    for(var i = 0; i < noPunct.length; i++) {
//        if(noPunct[i].length > lengthLongestWord) {
//            lengthLongestWord = noPunct[i].length;
//            longestWord = noPunct[i];
//        }
//    }
//    return longestWord;
//};
//
//console.log(longest("ao! work desk"));


//find the number of instances of each letter
//var letFreq = function(str) {
//    var obj = {};
//    str = str.toLowerCase();
//    for(var i = 0; i < str.length; i++) {
//        if(obj.hasOwnProperty(str[i])) {
//            obj[str[i]] += 1;
//
//        } else {
//            obj[str[i]] = 1;
//        }
//    }
//    return(obj);
//};
//
//console.log(letFreq("get Up to get down"));

//var Instructor = function(name, language, level, instruction, location, rate) {
//    this.name = name;
//    this.language = language;
//    this.level = level;
//    this.instruction = instruction;
//    this.location = location;
//    this.rate = rate;
//}
//
//var User = function(name, language, location, level, membershipType, gender, practicePartner) {
//    this.name = name;
//    this.language = language;
//    this.location = location;
//    this.level = level;
//    this.membershipType = membershipType;
//    this.gender = gender;
//    this.practicePartner = practicePartner;
//}
//
//var inst0001 = new Instructor("Emilio Escobar", "Spanish", "Native", ["beginner", "intermediate", "advanced", "business"], "Columbia", "12.50");
//
//var user0001 = new User("Sally Summers", ["Spanish", "French"], "United States", "Intermediate", "free", "female", true)
//
//console.log(inst0001);
//console.log(user0001);
