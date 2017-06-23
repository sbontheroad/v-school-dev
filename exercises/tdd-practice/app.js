var lastNum = function (num1, num2) {
    var mod1 = num1 % 10;
    var mod2 = num2 % 10;
    if (mod1 === mod2) {
        return true;
    } else {
        return false;
    }
};

var middle = function (str) {
    return str.slice(1, -1);
};





module.exports = {
    lastNum: lastNum,
    middle: middle
};
