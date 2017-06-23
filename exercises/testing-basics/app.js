//character video game
//name -> string
//health -> Number
//inv -> []

//takeDamage -> subtract damage from health
//healDamage -> add health to health
//addItemToInventory -> adda string to your inv []

var assert = function (actual, expected) {
    if (actual !== expected) {
        throw {
            actual: actual,
            expected: expected
        };
    } else {
        console.log("test passed", {
            actual: actual,
            expected: expected
        });
    }
};

var describe = function (message, testFunc) {
    console.log("message");
    try {
        testFunc();
    } catch (err) {
        console.log("failed", err);
    }
};

var Player = function (name, health, inv) {
    this.name = name;
    this.health = health || 100;
    this.inv = inv || [];
    this.takeDamage = function(dm) {
        this.health -= dm;
    };
    this.healDamage = function(dm) {
        this.health += dm;
    };
    this.addItem = function(item) {
        this.inv.push(item);
    };
};

//hp -= damage
//hp += health
//inv + "";

describe("test run", function () {
    var player = new Player("testPlayerName");
    
    assert(player.name, "testPlayerName");
    assert(player.health, 100);
    assert(player.inv.length,0);
    player.takeDamage(30);
    assert(player.health, 70);
    player.healDamage(25);
    assert(player.health, 95);
    player.addItem("sword");
    assert(player.inv.length, 1)
})


///////////////////
//var assert = function (actual, expected) {
//    if (expected !== actual) {
//        throw {actual: actual, expected: expected};
//    }else {
//        console.log("test passed", {actual: actual, expected: expected});
//    }
//}
//
//var describe = function(message, testFunc) {
//    console.log(message);
//    try {
//        testFunc();
//    } catch(err) {
//        console.log("failed", err);
//    }
//}
//
//var mult = function(a, b) {
//    return a * b;
//};
//
//var div = function(a,b) {
//    return a / b;
//};
//
//describe("test calc", function() {
//    assert(mult(1,2), 2);
//    assert(div(4,2), 2);
//});

//////////////////////////////
//var assert = function (actual, expected) {
//    if (expected !== actual) {
//        throw {actual: actual, expected: expected};
//    } else {
//        console.log("test passed", {actual: actual, expected: expected});
//    }
//}
//
//var describe = function (message, testFunc) {
//    console.log(message);
//    try {
//        testFunc();
//    } catch (err) {
//        console.log("test group failed", err);
//    }
//};
//
//var add = function (a, b) {
//    return a + b;
//};
//
//var sub = function (a, b) {
//    return a - b;
//};
//
//describe("test calculator", function () {
//    assert(add(2, 3), 5);
//    assert(sub(2, 3), -1);
//});


////////////////////////////////
//var add = function(num1, num2) {
//  return num1 + num2;
//};
//
//assert(add(6, 4), 10)

//CASE 1: THROW AND CATCH
//try {
//  var myName = "John Doe";
//  console.log(name);
//} catch(err) {
//  console.log("input error is " + err);
//}

//CASE 2: THROW AND CATCH
//try{function movieCheck(age) {  
//  if(age < 0) {
//    throw "Error cannot be less than 0";
//  } else if(age <= 12) {
//    console.log("You can see PG movies");
//  } else if(age >= 13 && age < 18) {
//    console.log("You can see PG-13 movies");
//  } else if(age >= 18) {
//    console.log("You can see R rated movies");
//  }
//}
//movieCheck(-1);   }
//
//catch(err) {
//    console.log(err);
//}
