let ip = (str) => {
  if(str.length >= 7 && str.length <=15) {
    strSplit = str.split(".");
    if(strSplit.length === 4) {
      for(var i = 0; i < strSplit.length; i++) {
        if (strSplit[i] >= 0 && strSplit[i] <= 255) {
          return true;
        } else {
          throw "invalid ip address";
        }
      }
    } else {
      throw "invalid ip address";
    }
  } else {
    throw "invalid ip address";
  }
};

module.exports = ip;
