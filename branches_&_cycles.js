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

console.log(message);*/

//!----------- ВЕТВЛЕНИЕ В ФУНКЦИЯХ -----------
/*
 * У Sunny Coffee вартість доставки залежить від суми замовлення.
 * 1. Оголоси функцію getDeliveryPrice з параметром orderSum.
 * 2. За допомогою if...else if...else поверни з функції вартість доставки:
 *    - якщо orderSum не менше 500 — доставка безкоштовна, поверни 0;
 *    - якщо orderSum не менше 200 — поверни 30;
 *    - інакше — поверни 50.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.

function getDeliveryPrice(orderSum) {
  if (orderSum >= 500) {
    return 0;
  } else if (orderSum >= 200) {
    return 30;
  } else {
    return 50;
  }
}

console.log(getDeliveryPrice(600)); // 0
console.log(getDeliveryPrice(300)); // 30
console.log(getDeliveryPrice(150)); // 50*/

//!----------- ТЕРНАРНЫЙ ОПЕРАТОР -----------
/*
 * Функція перевіряє пароль користувача й повідомляє про результат.
 * Правильний пароль уже збережено у змінній correctPassword.
 * 1. Оголоси функцію checkPassword з параметром password.
 * 2. За допомогою тернарного оператора поверни з функції:
 *    - "Access granted", якщо password збігається з correctPassword;
 *    - "Access denied, wrong password!" — в іншому випадку.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */
//! Вариант с использованием if / else

/*const correctPassword = 'jqueryismyjam';

function checkPassword(password) {
  if (password === correctPassword) {
    return 'Access granted';
  } else {
    return 'Access denied, wrong password!';
  }
}

console.log(checkPassword('jqueryismyjam')); // Access granted
console.log(checkPassword('angul4r1sl1f3')); // Access denied, wrong password!
console.log(checkPassword('r3actsux')); // Access denied, wrong password!*/

//! Вариант с использованием if / else
/*
const correctPassword = 'jqueryismyjam';

function checkPassword(password) {
  return password === correctPassword
    ? 'Access granted'
    : 'Access denied, wrong password!';
}

console.log(checkPassword('jqueryismyjam')); // Access granted
console.log(checkPassword('angul4r1sl1f3')); // Access denied, wrong password!
console.log(checkPassword('r3actsux')); // Access denied, wrong password!*/

//!----------- ОПЕРАТОР switch #1-----------
/*
 * Сравнение мобильных телефонов:
 * - iPhone;
 * - Samsung;
 * - Xiaomi;
 * - Vertu.
 */

/*const phones = 'Samsung';
//! switch делает грубое сравнение ===
switch (phones) {
  //!case - это ветки
  case 'iphone': //! 1 ветка -- где 'Samsung' (условие) сравнивается со значениями в case 'значение'
    //'Samsung' === 'Iphone' => false
    console.log('Nice choice');
    break; //! оператор break - завершает выполнение switch
  case 'Samsung': // 2 ветка
    //'Samsung' === 'Samsung' => true
    console.log('Excellent choice');
    break; //! После true интерпретатор игнорирует весь код ниже и передает управеление в
  case 'Xiaomi': // 3 ветка
    //'Samsung' === 'Xiaomi' => false
    console.log('Good choice');
    break; //! оператор break - завершает выполнение switch
  case 'Vertu': // 4 ветка
    //'Samsung' === 'Vertu' => false
    console.log('Expensive Choice');
    break; //! оператор break - завершает выполнение switch
  default: //! блок default - на случай, если ниодно из значений не указано
    console.log('The brand is not most popular');
}

console.log('after');*/

//!----------- ОПЕРАТОР switch #2-----------
/*
 * Сервіс має три типи передплати, у кожного своя ціна в кредитах.
 * 1. Оголоси функцію getSubscriptionPrice з параметром type.
 * 2. За допомогою switch поверни з функції ціну залежно від type:
 *    - "starter" — 0;
 *    - "professional" — 20;
 *    - "organization" — 50;
 *    - будь-яке інше значення — "Invalid subscription type!".
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

//! Если использовать switch в середине function, нам не нужны result и break.
//! Мы можем возвращать значение прямо из ветки с помощьюю return***

/*function getSubscriptionPrice(type) {
  //let result; //! *** нам не нужен let result;
  switch (type) {
    case 'starter':
      return 0;
    //result = 0; //! *** вместо result и break возвращаем значение через return
    //break;
    case 'professional':
      return 20;
    //result = 20; //! *** вместо result и break возвращаем значение через return
    //break;
    case 'organization':
      return 50;
    //result = 50; //! *** вместо result и break возвращаем значение через return
    //break;
    default:
      return 'Invalid subscription type!'; //! *** вместо result возвращаем значение через return
  }

  //return result; //! *** return result здесь не нужны
}

console.log(getSubscriptionPrice('starter')); // 0
console.log(getSubscriptionPrice('professional')); // 20
console.log(getSubscriptionPrice('organization')); // 50
console.log(getSubscriptionPrice('premium')); // Invalid subscription type!*/

//!--- БЛОЧНАЯ ОБЛАСТЬ ВИДИМОСТИ (scope) — это место в коде, внутри которого переменная существует и доступна для обращения ---

if (5 > 3) {
  const message = 'Order accepted'; //! Переменная, объявленная через let или const внутри блока {}, доступна внутри этого блока, но недоступна снаружи.
  console.log(message);
}

console.log(message); //! Здесь переменная не читается интерпретатором, т.к. она находится за пределами блока
