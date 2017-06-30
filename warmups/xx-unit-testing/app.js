let doubleX = (str) => {
    str = str.toLowerCase();
    //indexOf will split string
    let x = str.indexOf("x");
    let xx = x + 1;
    if(str[x] === str[xx]) {
        return(true);
    } else {
        return(false);
    }
 
};

//let doubleX = (str) => str[str.indexOf("x") + 1] === "x";

module.exports = doubleX;