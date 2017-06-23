// var kids = true;
// var dog = true;

// if ((kids === true) && (dog === true)) {
//   console.log("change some diapers and take your dog for a walk");
// } else if (dog === true) {
//   console.log("take your dog for a walk");
// } else if (kids === true) {
//   console.log("change some diapers");
// } else {
//   console.log("enjoy all that free time and money");
// }



// var a = 7;
// var b = 10;

// if(a > b) {
//   console.log("A is greater than B");
// } else if (a < b) {
//   console.log("B is greater than A");
// } else {
//   console.log("A and B are equal");
// }


// var fruits = ["mango", "papaya", "grapes"];
// //keep going through to print all fruit in the array

// var index = 0;
// while (index < fruits.length) {
//   console.log(fruits[index]);
//   index++;
// }



// var events = ["music night", "movies that matter", "DV Concert"];

// var index = 0;
// var str = "any of these sound good? ";
// while(index < events.length) {
//   str += events[index] + " ";
//   index++;
// }

// console.log(str);

//noprotect
// while(true) {
//   var userinput = prompt("please enter something");
//   if(userinput.length > 0)
//     break;
// }

// console.log(userinput);

// var students = ["Dakota", "Spencer", "Danyon", "Joseph", "Wyatt", "Caleb", "Jordan"];
// for(var i = 0; i < 7; i++) {
//   console.log(students[i]);
// }

// var friends = ["Laura", "Nick", "Rob"];
// for(i=0; i < friends.length; i++) {
//   console.log(friends[i]);
// }


 
//ANOTHER FIZZ BUZZ - THIS ONE WORKS
//var array = [1,3,5,7,4,6,12,18];
//var total = 0;
//for (var i = 0; i < array.length; i++) {
//  if (array[i] % 2 === 1) {
//    total += array[i]; 
//  } 
//}
//
//console.log(total);
//
////new function
//function isOdd(num1) {
//    if(num1 % 2 !== 0) {
//        return true;
//} else {
//    return false;
//}
//}
//
////new function
//function MeanEasy(num1, num2, num3) {
//    return((num1+num2+num3)/3);
//}
//
////new function
//function MeanHard(nums) {
//    total = 0;
//    for(var i=0; i < nums.length; i++) {
//        total = total + nums[i];
//    }
//    mean = total/nums.length;
//        return mean;
//}
//
//
//var numbers = [29, 37, 52];

////remove item from array
//var numbers = [29, 37, 52, 56];
//console.log(numbers);
////first number of splice is position to start at, second number removes that many spaces
//numbers.splice(2,1);
//console.log(numbers);
//
//
////where is something within the array
//var food = ["fries", "hamburger", "cheese", "ice cream"];
//var search = "fries";
//for(var i=0; i < food.length; i++) {
//  if (search == food[i]) {
//    console.log("index is " + i);
//  }
//}
//
////better way to do above
//var food = ["lamb", "ice cream", "king crab", "veggies", "fajitas"];
//var search = food.indexOf("fajitas");
//console.log(search);

//var students = ["Danyon", "Dane", "Dcaleb"];
//students.forEach(function(item) {
//  console.log(item);
//});

//var nums = [1, 23, 20, 10];
//var total = 0;
//nums.forEach(function(item) {
//             total += item;
//             });
//console.log(total);

//var name = ["ben", "tiff", "julie"];
//var str = "";
//for(var i = 0; i < name.length; i++) {
//  str += name[i];
//  if(i != name.length) {
//    str += "' ";
//  }
//}
//
//console.log(name);

//cannot use NAME as the name of an array

//var people = ["ben", "tiff", "julie"];
//
//console.log(people.join(": "));

//var students = ["ksarah", "kspencer", "kwyatt"];
//var output = [];
//for(var i = 0; i < students.length; i++) {
//  output.push( {
//    name: students[i]
//  });
//}
//
//console.log(output);

//var students = ["ksarah", "kspencer", "kwyatt"];
//var output = students.map(function(item) {
//      return {
//        name: item
//      }
//  })
//console.log(output);


//var nums = [1, 2, 5]
//var output2 = nums.map(function(item) {
//  return {
//    position: item
//  }
//});
//
//console.log(output2);

//FIND HOW MANY VOWELS IN A STRING (STRING PASSED IN WHEN CALLED)
function VowelCount(str) {
    count = 0;
    for(var i = 0; i < str.length; i++) {
        str.toLowerCase();
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i]=== "o" || str[i] === "u") {
            count ++;
        }
    }
    return count;
}

//ANOTHER WAY TO DO IT
var vowels = ["a","e", "i", "o","u"];
var str = "Aaaaple";
str = str.toLowerCase();
var count = 0;

for(var x = 0; x < vowels.length; x++) {
    if(str[i] == vowels[x]) {
        count++;
    }
}

//return largest item in a string
function LargestItem(arr) {
    return Math.max.apply(Math, arr);
}

