//compare last two numbers in a string 
var lastTwo = function(num1, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    if(num1[num1.length - 1] === num2[num2.length -1]) {
        return true;
    } else {
        return false;
    }
}

module.exports = lastTwo;


//function add(num1, num2) {
//    return num1 + num2;
//}
//console.log(add("hello", 12));
//
//function sub(num1, num2) {
//    return num1 - num2;
//}
//console.log(sub(4, 79));
//
//function mult(num1, num2) {
//    return num1 * num2;
//}
//console.log(mult(2, 3));
//
//function division(num1, num2) {
//    return num1 / num2;
//}
//console.log(division(4, 2));
//
//function increment(moreCowbell) {
//    moreCowbell++;
//    return moreCowbell;
//}
//console.log(increment(55));
//
//function add(num1, num2) {
//    return num1 + num2;
//}
//console.log(add(3,4) + 10);

//function add(nums) {
//    var total = 0;
//    for(var i = 0; i < nums.length; i++) {
//        total += nums[i];
//    }
//    return total;
//}
//console.log(add([5, 6, 7]));
//
//function add(num1, num2) {
//    return num1 + num2;
//}
//console.log(add(2,3));
//
//function largestNumber(num1, num2, num3) {
//    if(num1 > num2  && num1 > num3) {
//        return num1;
//    } else if (num2 > num1 && num2 > num3) {
//        return num2;
//    } else {
//        return num3;
//    };
//}
//console.log(largestNumber(2, 2, 2));
//
//var largestNumber = function(num1, num2, num3) {
//      if(num1 > num2  && num1 > num3) {
//        return num1;
//    } else if (num2 > num1 && num2 > num3) {
//        return num2;
//    } else {
//        return num3;
//    };
//}
//console.log(largestNumber(2, 2, 2));
//
//var evenOrOdd = function(num) {
//    if(num % 2 === 0) {
//        return "even";
//    } else {
//        return "odd";
//    }
//}
//console.log(evenOrOdd(1073));

//var lengthDivision = function(input) {
//    if(input.length <= 20) {
//        return input + " " + input;
//    } else if (input.length > 20) {
//        return input.slice(0, 20);
//    }
//}
//console.log(lengthDivision("Let's Play Ball!!"));
//

var str = "koala";
var upperStr = str.toUpperCase();
var lowerStr = upperStr.toLowerCase();
var half = Math.round(str.length / 2);
var halfstr = str.substr(0, half);
console.log(str.length);
console.log(upperStr);
console.log(lowerStr);
console.log(half);
console.log(halfstr);


