

var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");
//var query = document.querySelector;

function formAlert() {
    var firstName = form.elements["first-name"].value;
    var lastName = form.elements["last-name"].value;
    var age = Number(form.elements["age"].value);
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
    
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

describe("submit form", function () {
    assert(firstName, "sarah");
    assert(lastName, "baldwin");
    assert(age, 2);
    assert(gender, "female");
    (assert(location, "Here"));
    assert(diet, "vegan");
})
}


submit.addEventListener("click", formAlert);