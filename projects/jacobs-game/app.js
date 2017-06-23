var readlineSync = require('readline-sync');

var hasKey = false;

function printroom() {
    if (hasKey == true) {
        console.log("you are in a room with a door");
    } else {
        console.log("you are in a room and a key is on the ground");
    }
}

console.log("commands are look, grab, open");
while(true) {
    var input = readlineSync.question("what would you like to do? ");
    input = input.toLowerCase();
    if(input.includes("look")) {
        printroom();
    } else if (input.includes("grab") && (input.includes("key"))) {
        console.log("you grabbed the key");
        hasKey=true;
    } else if (input.includes("grab")) {
        console.log("you need to grab a thing");
    } else if (input.includes("open") && input.includes("door") && hasKey) {
        console.log("you leave the room");
        break;
    } else if (input.includes("open") && input.includes("door")) {
        console.log("you need the key");
    } else {
        console.log("commands are look, grab, open");
    }
}

//need npm init -y
//npm install -S readline-sync