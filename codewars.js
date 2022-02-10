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
