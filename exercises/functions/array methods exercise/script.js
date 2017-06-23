var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 


////Remove the last item from the vegetable array
vegetables.pop();

//Remove the first item from the fruit array
fruit.shift();

//Find the index of "orange"
var position = fruit.indexOf("orange");

//Add that number to the end of the fruit array
fruit.push(position);
//
//console.log("fruit: ", fruit);

//Use the length property to find the length of the vegetable array. Log that to the console.
//console.log("number of vegetables: " + vegetables.length);

//Add that number to the end of the vegetable array.
vegetables.push(vegetables.length);
//console.log("vegetables: ", vegetables);

//Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruit.concat(vegetables);
//console.log(food);

//Remove 2 elements from your new array starting at index 4 with one method.
var food = fruit.concat(vegetables);
food.splice(4,2);
//console.log(food);

//Reverse your array.
food.reverse();
//console.log(food);

//Log your array as a string to the console.
console.log(food.toString());

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

