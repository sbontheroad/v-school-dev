var isPalindrome = function (str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re,'');
    var reverseStr = lowRegStr.split('').reverse().join('');
    console.log(reverseStr);
    return reverseStr === lowRegStr;
};

module.exports = {
  isPalindrome: isPalindrome
};

//alt methods
//var removeSpecialCharacters = function(str) {
//    var alpha = ("abcdefghijklmnopqrstuvwxyz").split("");
//    for(var i = 0; i < str.length; i++) {
//        if(alpha.indexOf(str[i]) === -1) {
//            str = str.replace(str[i], "");
//        }
//    }
//    return str;
//}

//OR
//var removeSpecialCharacters = function(str) {
//    var result = "";
//    var alpha= ("abcdefghijklmnopqrstuvwxyz").split("");
//    for(var i = 0; i < str.length; i++) {
//        if(alpha.indexOf(str[i]) != -1) {
//            result += str[i];
//        }
//    }
//    return result;
//}


