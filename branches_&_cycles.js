'use strict';
//!----------- ИНСТРУКЦИЯ: if -----------
/*
 * У Sunny Coffee доставка безкоштовна від 500, інакше коштує 50.
 * 1. Оголоси змінну orderSum зі значенням суми замовлення 300.
 * 2. За допомогою if перевір: якщо orderSum менше 500,
 *    додай до orderSum вартість доставки 50.
 * 3. Виведи orderSum у консоль.


let orderSum = 300;
if (orderSum < 500) { //! 300 < 500 -- true
  orderSum += 50; //! 300 + 50 = 350
}
console.log(orderSum);*/

//!----------- ИНСТРУКЦИЯ: if...else -----------
/*const grade = 80;
if (grade >= 70) { //! 80 >= 70 -- true
  console.log('Satisfactory'); //! В консоле вывод будет: Satisfactory
} else {
  console.log('Unsatisfactory'); //! Эту ветку интерпретатор не выводит.
}
//! При одновременном использовании if и else, в консоле будет выводиться только 1 ветка. Или if или else!!!
*/

//!----------- БЛОК: else __ if -----------
/*
 * Магазину потрібно перевіряти замовлення перед оформленням.
 * Є два значення: скільки товару доступно на складі й скільки замовлено.
 * 1. Оголоси змінну available зі значенням 100 (доступно на складі).
 * 2. Оголоси змінну ordered зі значенням 130 (кількість у замовленні).
 * 3. Оголоси змінну message.
 * 4. За допомогою if...else if...else признач message:
 *    - якщо ordered дорівнює 0 — "There are no products in the order!";
 *    - якщо ordered більше за available —
 *      "Your order is too large, there are not enough items in stock!";
 *    - інакше — "The order is accepted, our manager will contact you".
 * 5. Виведи message у консоль.

const available = 100;
const ordered = 130;
let message;

if (ordered === 0) { //! Если ordered = 0 (true)
  message = 'There are no products in the order!'; //! Выведи это сообщение
} else if (ordered > available) { //! В случае, если ordered > available (true)
  message = 'Your order is too large, there are not enough items in stock!'; //! Выведи это сообщение
} else { //! В любом другом случае
  message = 'The order is accepted, our manager will contact you'; //! Выведи это сообщение
}

console.log(message);
*/
