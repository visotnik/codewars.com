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
  const ascArr = numbers.sort((a, b) => a - b);
  const positiveNumbersArr = ascArr.filter((el) => el > 0);
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
