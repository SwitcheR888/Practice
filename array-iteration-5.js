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

//! ==== НЕЯВНЫЙ ВОЗВРАТ ФУНКЦИИ ====
/*
 * Нижче три стрілочні функції SmileCare з явним поверненням.
 * 1. Перепиши на неявне повернення ті функції, у тілі яких лише вираз,
 *    що повертається.
 * 2. Функцію, у тілі якої є й інші інструкції, залиш без змін.
 * Виклики знизу чіпати не треба: після рефакторингу вони мають
 * вивести ті самі результати.

// const calculateVisitsCost = (pricePerVisit, visits) => {
//   return pricePerVisit * visits;
// };
const calculateVisitsCost = (pricePerVisit, visits) => pricePerVisit * visits;

// const getInsuranceCoverage = price => {
//   return price * 0.5;
// };
const getInsuranceCoverage = price => price * 0.5;

const getFinalPrice = (price, discount) => {
  const finalPrice = price - discount;
  console.log('Final price: ' + finalPrice);
  return finalPrice;
}; //! Здесь выполнить неявный возврат f НЕВОЗМОЖНО, потому что в теле f есть другие инструкции кроме return

console.log(calculateVisitsCost(450, 3)); // 1350
console.log(getInsuranceCoverage(900)); // 450
console.log(getFinalPrice(1200, 300));
// Final price: 900
// 900
*/

//! ==== СТРЕЛОЧНЫЕ f и arguments ====
/*
 * Функція describeOrder() приймає будь-яку кількість назв напоїв
 * і повертає опис замовлення у форматі:
 * 'Espresso, Latte, Americano | items: 3'
 * тобто назви через кому, потім ' | items: ' і кількість напоїв.
 * 1. Оголоси describeOrder як стрілочну функцію.
 * 2. Збери всі аргументи в масив drinks через залишкові параметри.
 * 3. Поверни рядок цього формату, склавши його шаблонним рядком.
 * 4. Використай неявне повернення.

/*const describeOrder = (...drinks) => {
  //  console.log(drinks);

  const names = drinks.join(', '); //! Это значение можно убрать, переместив в return выражения вместо ${names}
  //  console.log(names);

  return `${names} | items: ${drinks.length}`; //! И сделать неявный возврат return
}; //! Это можно записать сокращенно
*/
/*
const describeOrder = (...drinks) =>
  `${drinks.join(', ')} | items: ${drinks.length}`; //! Неявный возврат НЕЖЕЛАТЕЛЬНО!!! делать когда много инструкций / действий / вычислений

console.log(describeOrder('Espresso', 'Latte', 'Americano'));
// Espresso, Latte, Americano | items: 3

console.log(describeOrder('Cappuccino', 'Latte'));
// Cappuccino, Latte | items: 2

console.log(describeOrder('Espresso'));
// Espresso | items: 1
*/

//! ==== СТРЕЛОЧНЫЕ f как callback ====
//! *** ВАРИАНТ № 1 ***
/*
const prices = [45, 50, 80];

prices.forEach(function (price) {
  console.log(price + ' UAH');
});
// 45 UAH
// 50 UAH
// 80 UAH
*/
//! *** ВАРИАНТ № 2 ***
/*
const prices = [45, 50, 80];

prices.forEach(price => { //! Убрали саму f и заменили ее =>
  console.log(price + ' UAH'); //! Можно записать в один рядок то, что должно выполниться (Вар.3)
});
*/
//! *** ВАРИАНТ № 3 ***
/*
const prices = [45, 50, 80];

prices.forEach(price => console.log(price + ' UAH'));
*/

//! *** ПРИМЕР ***
/*
 * Нижче три виклики forEach() зі звичайними функціями-колбеками.
 * 1. Перепиши кожен колбек стрілочною функцією.
 * 2. Скороти кожен запис настільки, наскільки дозволяють
 *    його параметри й тіло.
 * 3. Вивід у консоль має лишитись тим самим.

const services = ['Cleaning', 'Whitening', 'Filling'];
const prices = [450, 1200, 800];

services.forEach(service => console.log(service));
// Cleaning
// Whitening
// Filling

prices.forEach((price, index) => console.log(`${index + 1}. ${price} UAH`));
// 1. 450 UAH
// 2. 1200 UAH
// 3. 800 UAH

prices.forEach(price => {
  const priceWithTax = price * 1.2;
  console.log(priceWithTax);
});
// 540
// 1440
// 960
*/

//! ==== МЕТОД map() ====
//! *** РАЗЪЯСНЕНИЕ ***
/*
 * Нам нужно получить массив, где каждое число умножено на 2

const numbers = [1, 2, 3, 4];

// const doubledNumbers = numbers.map(number => { //! Вместо const doubledNumbers ...; можно написать:
//   return number * 2;
// });
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8]
*/
//! map() берёт каждый элемент, передаёт его в callback и результат callback помещает в новый массив
/*
const prices = [100, 200, 300];

const newPrices = prices.map(price => price + 50);

console.log(newPrices); // [150, 250, 350]
*/
//! *** ПРИМЕРЫ ***
//! *** 1 ***

//! *** 2 ***
//! *** 3 ***
// *
//  * Функція getDrinkCodes(drinks) повертає новий масив кодів напоїв для каси.
//  * Код — це перші три літери назви у верхньому регістрі.
//  *   drinks — масив назв напоїв (рядки).
//  * 1. Оголоси getDrinkCodes як стрілочну функцію.
//  * 2. Перебери масив drinks методом map().
//  * 3. У колбеку збережи перші три літери назви у змінну shortName
//  *    за допомогою методу slice().
//  * 4. Поверни з колбека shortName у верхньому регістрі.
//  * 5. Поверни новий масив, який дав map().
//  */

// // Твій код тут

// console.log(getDrinkCodes(['Espresso', 'Cappuccino', 'Latte'])); // ['ESP', 'CAP', 'LAT']
// console.log(getDrinkCodes(['Americano', 'Mocha'])); // ['AME', 'MOC']
// console.log(getDrinkCodes(['Tea'])); // ['TEA']
//! *** 4 ***
