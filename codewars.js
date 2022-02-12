// =================================================================================

function multiply(a, b) {
  if (undefined == a || undefined == b || isNaN(a) || isNaN(b))
    throw new Error("Both arguments should be numbers");
  return a * b;
}

// =================================================================================
console.log("+++++++++ List Filtering");

function filter_list(l) {
  // Return a new array with the strings filtered out
  const arr = l.filter((el) => {
    if (el === parseInt(el, 10)) {
      if (el >= 0) return el;
    }
  });

  return arr;
}

console.log(
  "====>",
  filter_list(["a", 12, "35", -2, "12u", -9, 0, "0", "ty", 89])
);

// =================================================================================
// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел для заданного массива
// минимум из 4 положительных целых чисел. Не будут переданы числа с плавающей запятой
// или неположительные целые числа.
// Например, когда массив передается как [19, 5, 42, 2, 77, -2, 0], вывод должен быть 7.

function sumTwoSmallestNumbers(numbers) {
  //Code here
  // сортировка по возрастанию
  const ascArr = numbers.sort((a, b) => a - b);
  const positiveNumbersArr = ascArr.filter((el) => el > 0);
  // деструктуризацтя первых друх элементов массива
  const [a, b] = positiveNumbersArr;
  // const [a, b] = ascArr.filter((el) => el > 0);
  return a + b;
}

console.log("====>", sumTwoSmallestNumbers([12, -2, -9, 1, 4, 89]));

// =================================================================================
// Проверьте, содержит ли строка одинаковое количество «x» и «o».
// Метод должен возвращать логическое значение и не учитывать регистр.
// Строка может содержать любой символ.

// Примеры ввода/вывода:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  //code here
}

// Вам дан массив (который будет иметь длину не менее 3, но может быть очень большим),
// содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел,
// либо полностью состоит из четных целых чисел, за исключением одного целого числа N.
// Напишите метод, который принимает массив в качестве аргумента и
// возвращает этот «выброс» N.

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {
  //your code here
  const [a, b, c] = integers;
  const testArr = [a, b, c];
  let testNumber = 0;
  testArr.forEach((el) => {
    if (el % 2 == 0) {
      testNumber++;
    } else {
      testNumber--;
    }
  });

  console.log("testArr=", testArr);
  console.log("testNumber=", testNumber);
  const chechCondition = testNumber > 0 ? true : false;

  number = integers.find((el) => {
    // return el % 2 == 0; // != 0
    if (chechCondition) {
      return el % 2 != 0;
    } else {
      return el % 2 == 0;
    }
  });

  return number;
}

console.log("===>", findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

// =================================================================================
// Создайте программу, которая фильтрует список строк и возвращает список, содержащий
// только имена ваших друзей. Если в имени ровно 4 буквы, можете быть уверены,
// что оно должно быть вашим другом! В противном случае, вы можете быть уверены,
// что он не друг
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends) {
  //your code here
  const friendsArr = friends.filter((el) => {
    return el.length == 4;
  });

  return friendsArr;
}
console.log("===> friends >", friend(["Ryan", "Kieran", "Jason", "Yous"]));

// =================================================================================
// Завершите findNextSquareметод, который находит следующий целочисленный идеальный квадрат
// после квадрата, переданного в качестве параметра.
// Напомним, что целочисленный совершенный квадрат — это целое число n,
// такое что sqrt(n) также является целым числом.
// Если параметр сам по себе не является идеальным квадратом -1, его следует вернуть.
// Вы можете предположить, что параметр неотрицательный.
// Math.sqrt(9)
function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    // Return the next square if sq is a perfect square, -1 otherwise
    const number = Math.sqrt(sq);
    return (number + 1) * (number + 1);
  } else {
    return -1;
  }
}

console.log("===> findNextSquare >", findNextSquare(255));

// =================================================================================
// По городу движется автобус, и на каждой остановке он берет и высаживает несколько человек.
// Вам предоставляется список (или массив) целочисленных пар.Элементы каждой пары
// представляют количество людей, садящихся в автобус (первый элемент) и количество людей,
// выходящих из автобуса (второй элемент) на автобусной остановке.

// Ваша задача — вернуть количество людей, оставшихся в автобусе после последней автобусной
// остановки (после последнего массива). Несмотря на то, что это последняя автобусная
// остановка, автобус не пустой, и некоторые люди все еще в автобусе, и они, вероятно,
// спят там :D

// Взгляните на тест-кейсы.
// Имейте в виду, что тестовые примеры гарантируют, что количество людей в автобусе всегда >= 0. Таким образом, возвращаемое целое число не может быть отрицательным.

// Второе значение в первом целочисленном массиве равно 0, так как автобус на первой остановке пуст.

var number = function (busStops) {
  // Good Luck!
  let numberOfPassengers = 0;
  busStops.forEach((el) => {
    numberOfPassengers = numberOfPassengers + el[0];
    numberOfPassengers = numberOfPassengers - el[1];
  });
  return numberOfPassengers;
};

console.log(
  "===> number Of Passengers >",
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);

// =================================================================================
// Просто, учитывая строку слов, вернуть длину кратчайшего слова (слов).
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/solutions/javascript

// можно отсортировать массив по длине слов по возрастанию и вернуть arr[0]

function findShort(s) {
  let sArr = s.split(/\s/);
  let wordLength = 100;
  sArr.forEach((el) => {
    if (el.length < wordLength) {
      wordLength = el.length;
      console.log("el.length=", wordLength);
    }
  });
  return wordLength;
}

console.log("===> findShort(s) =", findShort("Let's travel abroad shall we"));

// =================================================================================
// https://www.codewars.com/kata/541c8630095125aba6000c00
// Учитывая n, возьмите сумму цифр n. Если это значение имеет более одной цифры,
// продолжайте уменьшать таким образом, пока не будет получено однозначное число.
// Ввод будет неотрицательным целым числом.

function digital_root(n) {
  let sum1 = 20;
  let arr = n.toString().split("");
  console.log("arr=", arr);
  while (sum1 / 10 >= 1) {
    sum1 = arr.reduce((sum, el) => {
      return sum + Number(el);
    }, 0);
    arr = sum1.toString().split("");
    console.log("arr=", arr);
  }
  return sum1;
}

console.log("===> digital_root(n) =", digital_root(97669));

// =================================================================================
// Implement the function unique_in_order which takes as argument a sequence and returns
// https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript
// a list of items without any elements with the same value next to each other and
// preserving the original order of elements.
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// s = 'AAAABBBCCDAABBB'
// s = 'AAAABBBCCDAABBB1254888744'
// s = ['AA', 'A', '', '','B','B','C','c','b', '', 'None',5,5,'5']
// s = ['i', 't', 'e', 'r', 'a', 'b', 'l', 'e']
// s = ['A', 'B', 'C', 'D', 'A', 'A', 'D']
// s = ['A', 'A', None, None, None]
// s = ['5', 5]

var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  let resultArr = [];

  if (typeof iterable === "string") {
    if (!iterable[0]) return resultArr;
    const arrFromIterable = iterable.split(""); // [...iterable]
    // убираем все дубликаты (получим:  'A', 'B', 'C', 'D') - нам не подходит
    // const unicIterable = new Set(arrFromIterable);
    // регулярное выражение regExp для одинаковых символов подряд
    // решается в одно регулярное выражение только с помощью обратных ссылок
    // https://learn.javascript.ru/regexp-backreferences
    // https://heap.imagetube.xyz/1/%D0%BF%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D0%B6%D0%B8%D1%82%D0%B5-%D1%80%D0%B5%D0%B3%D1%83%D0%BB%D1%8F%D1%80%D0%BD%D0%BE%D0%B5-%D0%B2%D1%8B%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0%D0%BA%D0%BE%D0%B2%D1%8B%D1%85-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB%D0%BE%D0%B2-%D0%BF%D0%BE%D0%B4%D1%80%D1%8F%D0%B4
    const arrRegExp = iterable.match(/(.)\1+|./g);
    resultArr = arrRegExp.map((el) => {
      return el[0];
    });
  } else if (typeof iterable === "object") {
    if (!iterable[0]) return resultArr;
    const stringFromArr = iterable.join("");
    console.log("stringFromArr =", stringFromArr);
    const arrRegExp = stringFromArr.match(/(.)\1+|./g);
    resultArr = arrRegExp.map((el) => {
      return el[0] === "1" ||
        el[0] === "2" ||
        el[0] === "3" ||
        el[0] === "4" ||
        el[0] === "5" ||
        el[0] === "6" ||
        el[0] === "7" ||
        el[0] === "8" ||
        el[0] === "9" ||
        el[0] === "0"
        ? Number(el[0])
        : el[0];
    });
  }

  return resultArr; // typeof iterable; // resultArr; // [...iterable]
};

console.log("===> unique_in_order =", uniqueInOrder("123")); // AAAABBBCCDAABBB ["AAAA", "BBB", "CC", "D", "AA", "BBB"]

// =================================================================================
// Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти!
// Массив содержит не менее 3 чисел.
// Тесты содержат очень большие массивы, так что подумайте о производительности.
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// Решение через сортировку
// function findUniq(arr) {
//   arr.sort((a,b)=>a-b);
//   return arr[0]==arr[1]?arr.pop():arr[0]
// }

// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/solutions/javascript

// Мое решение
function findUniq(arr) {
  // do magic
  let numbers = [];
  numbers.push(arr[0]);
  for (var i = 1; i < 3; i++) {
    if (arr[i] === numbers[0]) {
      numbers.push(arr[i]);
    }
  }
  if (numbers.length === 1) {
    return numbers[0]; // unicalNumber
  } else {
    return arr.find((el) => {
      return el !== numbers[0];
    });
  }
}

console.log(
  "====> arr =",
  findUniq([1, 1, 1, 1, 1, 1, 1, 1, -0.5, 1, 1, 1, 1, 1, 1])
);
