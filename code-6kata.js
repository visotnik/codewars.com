// =================================================================================
// This time we want to write calculations using functions and get the results.
// Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Each calculation consist of exactly one operation and two numbers
// Division should be integer division. For example, this should return 2, not 2.666666...:

// https://dev.to/aspittel/comment/6goi
// https://www.cyberforum.ru/javascript-beginners/thread2614753.html

// interesting solving
// ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
// .forEach(function (name, n) {
//     this[name] = function (f) { return f ? f(n) : n }
//   });

function zero(fn) {
  return fn ? fn(0) : 0;
}
function one(fn) {
  return fn ? fn(1) : 1;
}
function two(fn) {
  return fn ? fn(2) : 2;
}
function three(fn) {
  return fn ? fn(3) : 3;
}
function four(fn) {
  return fn ? fn(4) : 4;
}
function five(fn) {
  return fn ? fn(5) : 5;
}
function six(fn) {
  return fn ? fn(6) : 6;
}
function seven(fn) {
  return fn ? fn(7) : 7;
}
function eight(fn) {
  return fn ? fn(8) : 8;
}
function nine(fn) {
  return fn ? fn(9) : 9;
}

function plus(rightNum) {
  return function (leftNum) {
    return leftNum + rightNum;
  };
}
function minus(rightNum) {
  return function (leftNum) {
    return Math.floor(leftNum - rightNum);
  };
}
function times(numFn) {
  return function (leftNum) {
    return Math.floor(leftNum * rightNum);
  };
}
function dividedBy(rightNum) {
  return function (leftNum) {
    if (rightNum === 0) return "на ноль делить нельзя";
    return Math.floor(leftNum / rightNum);
  };
}

console.log("===>", five(dividedBy(zero())));

// =================================================================================
// Write a function that takes in a string of one or more words, and returns
// the same string, but with all five or more letter words reversed (Just like the name
// of this Kata). Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:
// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(words) {
//   return words
//     .split(" ")
//     .map(function (word) {
//       return word.length > 4 ? word.split("").reverse().join("") : word;
//     })
//     .join(" ");
// }

function spinWords(string) {
  //TODO Have fun :)
  const wordsArr = string.split(" ");
  const spinArr = wordsArr.map((el) => {
    if (el.length > 4) {
      const elArr = el.split("");
      return elArr.reverse().join("");
    }
    return el;
  });
  return spinArr.join(" ");
}

console.log("===> spinWords =", spinWords("This is another test"));
