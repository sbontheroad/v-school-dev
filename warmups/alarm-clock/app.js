const hours = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
const nums = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]["twenty", "thirty", "forty", "fifty"];
let tw = ["twenty", "thirty", "forty", "fifty"];
let minute = "";
let time = "";


let clock = (time) => {
  if(isNaN(time.split(":")[0])) {
    throw "not valid input";
  } else if (time === "00:00") {
    return "It is twelve am";
  }

  if(time.split(":")[0] < 13) {
      hour = low[time.split(":")[0] - 1];
      console.log(hour);
  }
  minute = Number(time.split(":")[1]);
  let newNum = minute.split("");
  console.log(newNum);

let append = "";
  if ((Number(time.split(":")[0]) >= 0 && Number(time.split(":")[0]) <= 11) || Number(time.split(":")[0]) === 24) {
    append = "am";
  } else {
    append = "pm";
  }

}
console.log(append);
console.log(`its ${hour} ${append}`)

clock("9:32");
module.exports = clock;

let timeNumToText = (str) => {

  //determine hour
  let hourStr = str.split(":")[0];
  if(isNaN(Number(hourStr)) === true) {
    throw "invalid input";
  }
  let hourIndex = Number(hourStr) % 12;
  let hour = hours[hourIndex];

  //determine meridiem
  let meridiem = "";
  if(Number(hourStr) > 12) {
    meridiem = "pm";
  } else {
    meridiem = "am";
  }

  //determine minute
  let minStr = str.split(":")[1];
  if(isNaN(Number(minStr)) === true) {
    throw "invalid input";
  }
  let minNum = Number(minStr);
  let min = "";

  if(minNum <= 9) {
    min += nums[minNum];
  } else if(minNum >= 10 && minNum <= 19) {
    min += teens[minNum % 10];
  } else {
    min += tw[Math.floor(min / 10)];
    if(minNum % 10 !== 0) {
      min +=  " ";
      min += nums[minNum % 10];
    }
  }

  //finial return
  if(min.length === 0) {
    return `its ${hour} ${meridiem}`
  } else {
    return `its ${hour} ${min} ${meridiem}`
  }
}

module.exports = timeNumToText;
