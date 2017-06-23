var addition = document.getElementById("add");
var addTwoNumbers = function () {
    var firstnum = document.getElementById("num1").value;
    var secondnumb = document.getElementById("num2").value;
    var add = parseInt(firstnum) + parseInt(secondnumb);
    document.getElementById("solution").innerHTML = add;
};
addition.addEventListener("click", addTwoNumbers);

document.getElementById("subract").addEventListener("click", function() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var sub = num1 - num2;
    document.getElementById("solution").innerHTML = sub;
});

document.getElementById("mult").addEventListener("click", function() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var mult = num1 * num2;
    document.getElementById("solution").innerHTML = mult;
});

//document.getElementById("subract").addEventListener("click", function() {
//document.getElementById("prob1solution").innerHTML =
//    Number(document.getElementById("prob1num1").value) + Number(document.getElementById("prob1num2").value);
//});
