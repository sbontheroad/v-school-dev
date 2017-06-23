////find longest word in a string, excluding punctuation. If there are two words of the same length, return the first.
//
//var longest = function(sen) {
//    var noPunct = sen.match(/[a-z0-9]+/gi);
//    var lengthLongestWord = 0;
//    var longestWord = "";
//    for(var i = 0; i < noPunct.length; i++) {
//        if(noPunct[i].length > lengthLongestWord) {
//            lengthLongestWord = noPunct[i].length;
//            longestWord = noPunct[i];
//        }
//    }
//    return longestWord;
//};
//
//console.log(longest("ao! work desk"));


//find the number of instances of each letter
//var letFreq = function(str) {
//    var obj = {};
//    str = str.toLowerCase();
//    for(var i = 0; i < str.length; i++) {
//        if(obj.hasOwnProperty(str[i])) {
//            obj[str[i]] += 1;
//            
//        } else {
//            obj[str[i]] = 1;
//        }
//    }
//    return(obj);
//};
//
//console.log(letFreq("get Up to get down"));

var Instructor = function(name, language, level, instruction, location, rate) {
    this.name = name;
    this.language = language;
    this.level = level;
    this.instruction = instruction;
    this.location = location;
    this.rate = rate;
}

var User = function(name, language, location, level, membershipType, gender, practicePartner) {
    this.name = name;
    this.language = language;
    this.location = location;
    this.level = level;
    this.membershipType = membershipType;
    this.gender = gender;
    this.practicePartner = practicePartner;
}

var inst0001 = new Instructor("Emilio Escobar", "Spanish", "Native", ["beginner", "intermediate", "advanced", "business"], "Columbia", "12.50");

var user0001 = new User("Sally Summers", ["Spanish", "French"], "United States", "Intermediate", "free", "female", true)

console.log(inst0001);
console.log(user0001);