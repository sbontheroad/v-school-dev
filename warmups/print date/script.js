//date object
var today = new Date();

//var get = today.getDay();
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
console.log("Today is: " + days[today.getDay()]);

//var hours = today.getHours();
//var minutes = today.getMinutes();
//var seconds = today.getSeconds();
//var append = function () {
//    if(hours < 12) {
//        return "AM";
//    } else {
//        return "PM";
//    }; 
//}

var printTime = "Current time is: " + today.toLocaleTimeString();

console.log("Current time is: " + hours + ":" + minutes + ":" + seconds + append());