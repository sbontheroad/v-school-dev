let nearHundred = (num) => {
  if(num >= 190 && num <= 210 || num >= 90 && num <= 110) {
    return true;
  } else {
    return false;
  }
};



module.exports = nearHundred;
