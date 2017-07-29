let revPara = (str) => {
  para = str.match(/\(([^)]+)\)/)[1];
  para = para.split('').reverse().join('');
  let beg = str.substring(0, str.indexOf("("));
  let index = str.indexOf(")");
  let end = str.substring(str.length, (str.indexOf(")")) + 1);
  newStr = beg + para + end;
  console.log(newStr);
  return newStr;
}

module.exports = revPara;

//another way:
//reversePara(example);
//returns "somthingedisniparentheses"
let reverse = (str) => {
  let isPara = false;
  let output = "";
  let reverse = "";
  //we have to know whether or not the current character is contained inside of a paranthese
  //iscontained:
  //is some character besides ")"
  //add the character to reverse
  //is ")"
  //reverse the reverse variable and add it to output
  //ifnotcontained
  //current character could be "("
  //set isPara to true
  //or not
  //add to output
//   for (let i = 0; i < str.length; i++) {
//     switch(isPara){
//       case true:
//         if(str[i] === ")"){
//           isPara = false;
//           output+= reverse.split("").reverse().join("");
//           reverse= "";
//         } else {
//           reverse += str[i];
//         }
//         break;
//       case false:
//         if( str[i] === "("){
//           isPara = true;
//         } else {
//           output+= str[i];
//         }
//     }
//   }
//   return output;
// }
