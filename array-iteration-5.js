'use strict';

//! ==== callback ФУНКЦИИ ====
//! callback — это функция, которую мы передаём другой функции как аргумент, чтобы та функция могла вызвать её позже.
/*
function sayHello() {
  console.log('Привет!');
}

function runFunction(someFunction) {
  someFunction(); //! runFunction может получить какую-то функцию.
}

runFunction(sayHello); //! передали runFunction(sayHello); т.е. sayHello - callback функция // Привет!
*/

//! *** ЗАДАЧА ***
/*
function processNumber(number, callback) { //! Здесь number - 5, callback - double
  return callback(number);
}

function double(number) {
  return number * 2;
} //! Когда передаем double(number) в processNumber, она становится callback-функцией и вызывает ее.

const result = processNumber(5, double); //! Передаём processNumber два значения (5, double)

console.log(result);
*/

//! ==== inline callback ФУНКЦИИ ====
/*
function processNumber(number, callback) {
  return callback(number);
}

const result = processNumber(5, function (number) { //! Функция без имени - анонимная функция
  return number * 2; //! Функция внутри аргументов processNumber() и есть inline callback
});

console.log(result); // 10
*/
//! *** ЗАДАЧА ***
/*
function calculate(number, callback) {
  return callback(number);
}

const result = calculate(7, function (number) {
  return number * 3;
}); //! принимает число и возвращает это число, умноженное на 3

console.log(result);
*/

//! ==== МЕТОД forEach() ====
/*
 * Функція getExpensivePrices(prices, minPrice) повертає новий масив,
 * у якому лише ціни від minPrice і вище.
 *   prices — масив цін (числа).
 *   minPrice — ціна, з якої послуга вважається дорогою.
 * 1. Оголоси змінну expensivePrices з порожнім масивом.
 * 2. Перебери масив prices методом forEach().
 * 3. У колбеку перевір: якщо поточна ціна не менша за minPrice,
 *    додай її до expensivePrices.
 * 4. Поверни expensivePrices.

function getExpensivePrices(prices, minPrice) {
  const expensivePrices = [];

  prices.forEach(function (price) {
    if (price >= minPrice) {
      expensivePrices.push(price);
    }
  });

  return expensivePrices;
}

console.log(getExpensivePrices([320, 750, 180, 1200, 460], 500)); // [750, 1200]
console.log(getExpensivePrices([320, 180, 460], 500)); // []
console.log(getExpensivePrices([90, 240, 1500, 620], 200)); // [240, 1500, 620]
*/

//! ==== СТРЕЛОЧНЫЕ ФУНКЦИИ ====
//! Обычная function
/*
function add(a, b) {
  return a + b;
}

//! => function
const add = (a, b) => {
  return a + b;
};

//! callback функция
prices.forEach(function (price) {
  console.log(price);
});

//! =>
prices.forEach(price => {
  console.log(price);
});

//! вариант с return
const square = number => {
  return number * number;
};

//! без return
const square = number => number * number;
*/

// function calculateTotal(price, quantity) {
//  return price * quantity;
// }
/*
const calculateTotal = (price, quantity) => {
  return price * quantity;
};

console.log(calculateTotal(45, 3)); // 135
*/

//! *** ЗАДАЧА ***
/*
 * Нижче три функції Sunny Coffee, записані звичайним способом.
 * Перепиши кожну з них стрілочною функцією, не змінюючи поведінки.
 * 1. calculateChange(paid, total) — з двома параметрами.
 * 2. addDeliveryFee(price) — з одним параметром.
 * 3. showWorkingHours() — без параметрів.
 * Виклики знизу чіпати не треба: після рефакторингу вони мають
 * вивести ті самі результати.

// function calculateChange(paid, total) {
//   return paid - total;
// }

const calculateChange = (paid, total) => {
  return paid - total;
};

// function addDeliveryFee(price) {
//   return price + 50;
// }

const addDeliveryFee = price => {
  return price + 50;
};

// function showWorkingHours() {
//   console.log('Sunny Coffee: 8:00 - 20:00');
// }

const showWorkingHours = () => {
  console.log('Sunny Coffee: 8:00 - 20:00');
};

console.log(calculateChange(200, 135)); // 65
console.log(addDeliveryFee(300)); // 350
showWorkingHours(); // Sunny Coffee: 8:00 - 20:00
*/
