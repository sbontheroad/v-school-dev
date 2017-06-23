var printEach = function (str) {
    for (i = 0; i < str.length; i++) {
        console.log(str[i]);
    }

}

printEach("this is a string");


function foundOrNot(str, a) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === a) {
            return "the character was found";
        }
    }
    return "the character was not found";
}

console.log(foundOrNot("I am making ac string", "c"));


var find42 = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 42) {
            return "42 was found";
        }
    }
    return "42 was not found";
}

console.log(find42([2, 55, 3]));


function lowestNumber(arr) {
    var lower = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < lower) {
            lower = arr[i];
        }
    }
    return lower;
}

console.log(lowestNumber([5, 2, 45, 3, 4, 5, 1, 7, 8, 9]));




for (var i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
