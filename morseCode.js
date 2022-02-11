// =================================================================================
// Написать простой декодер азбуки Морзе.
// ПРИМЕЧАНИЕ. Лишние пробелы до или после кода не имеют значения и их следует игнорировать.
// задача — реализовать функцию, которая будет принимать на вход азбуку Морзе и
// возвращать декодированную удобочитаемую строку.
// decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

// decodeMorse = function(morseCode){
//   //your code here
// let morseCodeTrim = morseCode.trim();
// // let morseCodeTrim = morseCode.replace(/^\s+./g, '.');
// let noWhiteSpace = /\S+|\s{3}/g; // Change this line
// let morseCodeArr = morseCodeTrim.match(noWhiteSpace);

//   resArr = morseCodeArr.map((el) => {
//     if (MORSE_CODE[el]) {
//      return MORSE_CODE[el]
//     } else {
//       return ' '
//     }
//   })

//   result = resArr.join("");

//   return result
// }

let sample =
  "      ... --- ... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-";
let sampleTrim = sample.trim();
console.log("sampleTrim =", sampleTrim);
let countWhiteSpace = /\S+|\s{3}/g; // Change this line
let resultReg = sampleTrim.match(countWhiteSpace);
console.log("resultReg =", resultReg);
