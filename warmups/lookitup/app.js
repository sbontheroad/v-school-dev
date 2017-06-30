//dict.key = "value";
////or you can write:
//dict["key"] = "value";
//dict.name = "sarah";
////or you can write it like this:
//dict["name"] = "sarah";
//console.log(dict.name);
////or:
//console.log(dict[name]);

let dict = {
    
};

let addWord = (newWord, newDef) => {
    newWord = newWord.toLowerCase();
    if(dict.hasOwnProperty(newWord) === false) {
       dict[newWord] = newDef; 
        return true;
    } else {
        return false;
    }
    
}

console.log(dict);

let lookItUp = (word) => {
    return dict[word]
};

module.exports = {
    addWord,
    lookItUp
};
