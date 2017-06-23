var addition = document.getElementById("add");


var addTwoNumbers = function () {
    var firstnum = document.getElementById("prob1num1").value;
    var secondnumb = document.getElementById("prob1num2").value;
    var add = parseInt(firstnum) + parseInt(secondnumb);
    document.getElementById("prob1solution").innerHTML = add;
};

addition.addEventListener("click", addTwoNumbers);

document.getElementById("subract").addEventListener("click", function() {
    var num1 = Number(document.getElementById("prob2num1").value);
    var num2 = Number(document.getElementById("prob2num2").value);
    var sub = num1 - num2;
    document.getElementById("prob2solution").innerHTML = sub;
});

document.getElementById("mult").addEventListener("click", function() {
    var num1 = Number(document.getElementById("prob3num1").value);
    var num2 = Number(document.getElementById("prob3num2").value);
    var mult = num1 * num2;
    document.getElementById("prob3solution").innerHTML = mult;
});

//document.getElementById("subract").addEventListener("click", function() {
//document.getElementById("prob1solution").innerHTML =
//    Number(document.getElementById("prob1num1").value) + Number(document.getElementById("prob1num2").value);
//});
