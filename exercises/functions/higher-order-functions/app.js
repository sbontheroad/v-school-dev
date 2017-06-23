//higher order practice

//var students = ["1", "2", "3"];
//for(var i =0; i < students.length; i++) {
//    console.log(students[i]);
//}
//
////same thing with a call back function
//var students2 = ["1", "2", "3"];
//students2.forEach(function(item) {
//    console.log(item);
//});


//array.forEach(function(currentValue, index, arr), thisValue)




//nums.filter(function(item) {
//    newArr = [];
//    if(item % 0) {
//       newArr += item;
//    }
//    console.log(newArr); 
//});

//return only odd numbers using .filter
//array.filter(function(currentValue, index, arr), thisValue)
//var nums = [1, 2, 3,4,5,6,7,8,-8, 0];
//
//var odd = nums.filter(function(item) {
//    return(item % 2 !== 0);
//});
//console.log(odd);



//var odd = function (nums) {
//    return(nums % 2 !== 0);
//};
//
//var myEvenArray = nums.filter(odd);
//
//console.log(myEvenArray);
////returns [ 1, 3, 5, 7 ]


//use .sort to sort numbers 
//var nums = [1, 2, 3,4,5,6,7,8,-8, 0];
//nums.sort(function(a, b) {return a-b});
//console.log(nums.sort(nums));
//returns [ -8, 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

//reduce 
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//var arr = [2, 3, 5];
//
//var sum = arr.reduce(function (total, amount) {
//  return total + amount;
//}, 0);
//
//console.log(sum);
//
//var bill = [
//  {
//  name: "lamb",
//  cost: 35
//  },
//    {
//        name: "icecream brownie",
//        cost: 8
//    },
//    {
//    name: "calamari app",
//    cost: 12
//    }
//];
//
//var sum = bill.reduce(function(total, item) {
//    return total + item.cost;
//}, 0);
//
//console.log(sum);

//var kvArray = [{key: "spencer", value: []}, 
//               {key: "danyon", value: []}, 
//               {key: "kacie", value: []}];
//
//var reformattedArray = kvArray.map(function(obj) { 
//   var rObj = {};
//   rObj[obj.key] = obj.value;
//   return rObj;
//});
//
//console.log(reformattedArray);

//var students = ["k", "s", "d"];
//var arr = students.map(function(item) {
//    return {
//    name: item,
//    grade: "A",
//    friends: []
//    }
//});
//
//console.log(arr);

function path(path1, path2) {
    var userinput = "path1";
    if (userinput === "left") {
        path1();
    } else {
        path2();
    }
}

path(function () {
    console.log("you go left and as you walk the path narrows with overgrown brambles");},
    function () {
        console.log("you go right and find yourself on a high cliff overlooking the sea")
    }
);


