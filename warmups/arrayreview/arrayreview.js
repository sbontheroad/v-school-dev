var numbers = [1, 2, 3];
var i = 0;
var result = 0;

for(i = 0; i < numbers.length; i++) {
    result += numbers[i];
}  
    console.log(result);


var gameIsGoing = true;
var kills = 0;

while(gameIsGoing) {
    kills++
    if(kills < 200) {
        kills++;
        console.log("keep killing");
    } else {
        console.log("too much killing");
        gameIsGoing = false;
    }
}

//declaration, comparison, iteration
for(var i = 1; i <= 100; i++) {
    console.log(i);
}