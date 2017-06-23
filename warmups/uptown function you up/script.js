var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

//The first function will take this array, and print it to the console. Make sure to add spaces in-between each word so it looks nice on the console

var result = " ";
for(var i = 0; i < lyrics.length; i++) {
    result += lyrics[i] + " ";
}

//The second function will do the same thing, but print the song backwards (starting with the word "pretty": "pretty so I'm myself kiss Gotta", etc.).

var result2 = " ";
for(var i = lyrics.length - 1; i >= 0; i--) {
    result2 += lyrics[i] + " ";
}

function reverse() {
    lyrics.reverse();
    return(lyrics.join(" "));
}

function backward() {
    var rev = lyrics.slice().reverse();
    return(rev.join(' '));
}

//The third function will print every other word to the console, i.e. "this that cold Pfeiffer", etc.

var result3 = " ";

for(var i = 0; i < lyrics.length; i += 2) {
    result3 += lyrics[i] + " ";
}

//Create a fourth function that reverses every two words. So the end result would look like this: "hit This ice that Michelle cold" ...
var flipWords = function(arr) {
    var newSent = "";
    for(var i = 1; i < arr.length - 1; i++) {
        if(i % 2 == 0) {
            newSent += (arr[i + 2] + " " + arr[i]) + (" ");
        }
    }
    return newSent;
}

console.log(result);
console.log(result2);
console.log(result3);
console.log(reverse());
console.log(backward());
console.log(flipWords(lyrics));