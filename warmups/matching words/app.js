let riddle = "Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas.";



let matchingWords = (str) => {
    let matchingArr = [];
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        for (let x = i + 1; x < str.length; x++) {
            if (str[i] === str[x] && x != i) {
                if(matchingArr.includes(str[i]) === false) {
                    matchingArr.push(str[i]);
                }
            }
        }
    }
    return matchingArr;
};

console.log(matchingWords(riddle));

module.exports = {
    matchingWords
}
