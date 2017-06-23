var add = function (num1, num2) {
    return num1 + num2;
};

var sub = function (num1, num2) {
    return num1 - num2;
};

var mult = function (num1, num2) {
    return num1 * num2;
};

var div = function (num1, num2) {
    return num1 / num2;
};

module.exports = {
    add: add,
    sub: sub,
    mult: mult,
    div: div
};