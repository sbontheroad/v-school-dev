//That prints out + "The type is " + type + ", Hit points: " + hitPoints + " defense: " + Defense;

var Enemy = function (type, hitPoints, defense) {
    this.type = type;
    this.hitPoints = hitPoints;
    this.defense = defense;
//    this.print = function () {
//        console.log("The type is " + type + ", Hit points: " + hitPoints + " defense: " + defense)
//    };
};

var genNumInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

function genEnemy() {
    var enemyTypes = ["Twighlight Sparkle", "Rainbow Dash", "Pinkie Pie"];
    var randomType = enemyTypes[genNumInRange(0, enemyTypes.length)];
    var randomHitPoints = 0;
    if (randomType === "Twighlight Sparkle") {
        randomHitPoints = genNumInRange(80, 100);
    } else if (randomType === "Rainbow Dash") {
        randomHitPoints = genNumInRange(50, 79);
    } else {
        randomHitPoints = genNumInRange(20, 49);
    }
    var randomEnemy = new Enemy(randomType, randomHitPoints, randomHitPoints * 3);
    return randomEnemy;
}


for (var i = 0; i < 100; i++) {
    var myEnemy = genEnemy();
    //myEnemy.print();
    //append to array
    var arrOfEnemies = [];
    arrOfEnemies.push(myEnemy);
    console.log(arrOfEnemies);
}

