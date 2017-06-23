var shopper = {
    name: "Susan",
    familySize: 4,
    usesCoupons: false,
    groceryCart: ['spaghetti', 'ground beef', 'bread'],
    totalItemsPurchased: function() {
        return("please fill cart first");
    }
};


var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
});

function check() {
    if (document.getElementById("checkboxYes").checked === true) {
        document.getElementById("insertText").innerHTML = "Send " + shopper.name + " a coupon for " + shopper.groceryCart[2];
    } else if (document.getElementById("checkboxNo").checked === true) {
        document.getElementById("insertText").innerHTML = "Don't send " + shopper.name + " a coupon for " + shopper.groceryCart[2];
    }

} v        c              n

var customerName = document.getElementById("customerName");
customerName.innerHTML = shopper.name;

var insertObjectFunction = document.getElementById("insertObjectFunction");
insertObjectFunction.innerHTML = shopper.totalItemsPurchased();

