'use strict';

//! ====== МАССИВЫ ======
/*
 * Sunny Coffee показує меню, лише якщо в ньому є напої.
 * 1. Оголоси масив menu з назвами напоїв:
 *    'Espresso', 'Latte', 'Cappuccino', 'Americano', 'Raf'.
 * 2. Виведи в консоль кількість напоїв у форматі: Напоїв у меню: 5
 * 3. Якщо в меню є хоча б один напій — виведи 'Меню доступне',
 *    інакше — виведи 'Меню порожнє'.

const menu = ['Espresso', 'Latte', 'Cappuccino', 'Americano', 'Raf'];

console.log(`Напоїв у меню: ${menu.length}`);

if (menu.length > 0) {
  console.log('Меню доступне');
} else {
  console.log('Меню порожнє');
} */

//! ====== ДОСТУП К ЭЛЕМЕНТАМ ======
/*
const phones = ['Samsung', 'Apple', 'Huawei', 'Xiaomi', 'Sony'];
console.log(phones[0]); // 'Samsung'
console.log(phones[1]); // 'Apple'
console.log(phones[2]); // 'Huawei'
console.log(phones[3]); // 'Xiaomi'
console.log(phones[4]); // 'Sony' //! Индексация начинается с 0, поэтому последний элемент имеет индекс 4.
console.log(phones[5]); // undefined

console.log(phones.length); //! Позиция начинается с 1. (кол-во элементов в массиве = 5).
console.log(phones[phones.length - 1]); //! Индекс последнего элемента.
*/

//! ====== ЗАМЕНА ЗНАЧЕНИЯ ЭЛЕМЕНТА ======
/*
const phones = ['Samsung', 'Apple', 'Huawei', 'Xiaomi', 'Sony'];
//phones[4] = `Sony`; // Выводит Sony
//! Если нужно заменить любой элемент в массиве, можно обратиться к нему через индекс
phones[4] = `Nokia`; //! Заменит элемент с индексом 4 на 'Nokia'
console.log(phones); //! В консоле отобразится перечень  ['Samsung', 'Apple', 'Huawei', 'Xiaomi', 'Nokia']
*/
//! ====== ПРИМЕР: ======
/*
 * SmileCare зберігає розклад прийомів лікаря на сьогодні —
 * масив годин, коли призначені пацієнти.
 * 1. Оголоси масив appointments зі значеннями: '09:00', '11:30', '14:00', '16:30'.
 * 2. Дістань перший прийом (перший елемент) і збережи у змінну firstAppointment.
 * 3. Дістань останній прийом через appointments.length - 1
 *    і збережи у змінну lastAppointment.
 * 4. Виведи повідомлення у форматі:
 *    Перший прийом: 09:00, останній: 16:30
 * 5. Останній пацієнт перепризначився на 17:00 — заміни останній
 *    елемент масиву на '17:00' і виведи оновлений масив.
 * 6. Якщо прийомів більше ніж 3 — виведи 'Щільний день',
 *    інакше — виведи 'День вільний'.

const appointments = ['09:00', '11:30', '14:00', '16:30']; // Задание 1
console.log(appointments);

const firstAppointment = appointments[0]; // Задание 2
//console.log(firstAppointment);
const lastAppointment = appointments[appointments.length - 1]; // Задание 3
//console.log(lastAppointment);

console.log(`Перший прийом: ${firstAppointment}, останній: ${lastAppointment}`); // Задание 4

appointments[appointments.length - 1] = '17:00'; //! Для изменения последнего элемента в массиве нужно обратиться к нему через формулу .length - 1 и задать значение
console.log(appointments); // Задание 5

if (appointments.length > 3) {
  console.log('Щільний день'); // Задание 6
} else {
  console.log('День вільний');
}
  */

//! ====== ПРИСВОЕНИЕ ЗНАЧЕНИЙ ПРИМИТИВНЫХ ТИПОВ («возьми значение и скопируй его в другую переменную») ======
//
//! ====== ПРИМИТИВНЫЕ ТИПЫ: числа, ряды, булевые ======
/*
let points = 5;
let savedPoints = points;

console.log('Before', points);
console.log('Before', savedPoints);

points = 10; //! когда мы присваиватся значение другой переменной, копируется само значение, а не связь с исходной переменной.

console.log('After', points); // 10
console.log('After', savedPoints); // 5
*/

//! ====== ПРИСВОЕНИЕ ПО ССЫЛКЕ ======
//! ((( переменные начинают ссылаться на один и тот же объект в памяти)))
/*
const guestList = ['Anna', 'Ihor'];
const backup = guestList;

console.log('guestList:', guestList);
console.log('backup:', backup);

guestList[1] = 'Olena';

console.log('guestList:', guestList); // ['Anna', 'Olena']
console.log('backup:', backup); // ['Anna', 'Olena']
*/

//! ====== СРАВНЕНИЕ МАССИВОВ ======
//! ((( Массивы сравниваются по ссылке, а не по содержимому )))
/*
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

console.log(arr1 === arr2); //! 2 независимых массива не будут равны между собой, так как это 2 разные ссылки в памяти. (false)
*/ /*
const arr1 = [1, 2, 3];
const arr2 = arr1; //! Здесь указана ССЫЛКА на первый массива.

console.log(arr1 === arr2);
*/
//! ====== ПРОВЕРКА МАССИВА В УСЛОВИИ ======
/*
const fruits = []; //! даже пустой массив [] — truthy

if (fruits) {
  console.log('Массив существует'); //! НО! Так нельзя проверять!
}
*/
//! Проверка содержимого на наличии элементов выполняется с помощью length:
/*
const fruits = ['apple', 'banana']; //! В массиве должны быть элементы! Иначе условие не выполнится. Здесь 2 элемента

if (fruits.length > 0) {
  console.log('Массив не пустой'); //! Массив не пустой
}
*/
//! Проверка пустой ли массив:
/*
const fruits = [];

if (fruits.length === 0) {
  console.log('Массив пустой'); //! Массив пустой
}
*/
//! **** ЗАПОМНИТЬ!!! ****
//! Пустой массив [] = truthy
//! [].length = 0, поэтому пустоту массива проверяем через length.

/*
 * SmileCare тримає чергу записів на сьогодні — масив імен пацієнтів.
 * Функція checkQueue(queue) перевіряє її через довжину масиву.
 * 1. Оголоси функцію checkQueue(queue).
 * 2. Якщо queue.length === 0 — поверни 'Записів немає'.
 * 3. Інакше — поверни рядок 'Записів у черзі: N', де N — кількість записів.

function checkQueue(queue) {
  if (queue.length === 0) {
    return 'Записів немає';
  } else {
    return `Записів у черзі: ${queue.length}`;
  }
}

console.log(checkQueue(['Alex', 'Sam', 'Kim'])); // Записів у черзі: 3
console.log(checkQueue(['Max'])); // Записів у черзі: 1
console.log(checkQueue([])); // Записів немає
console.log(checkQueue(['Alex', 'Sam', 'Kim', 'Max', 'Lee'])); // Записів у черзі: 5
*/

//! ====== МЕТОД join() ======
//! ** Метод массива, который объединяет все элементы массива в одну строку **
/*
 * Sunny Coffee показує позиції замовлення одним рядком у чеку,
 * а в дужках — їхню кількість.
 * Функція buildReceiptLine(order) приймає масив назв напоїв.
 * 1. Оголоси функцію buildReceiptLine(order).
 * 2. З'єднай назви напоїв у рядок методом join() з роздільником ', '.
 * 3. Поверни рядок виду `Latte, Espresso, Cappuccino (3)` — склеєні напої,
 *    а в дужках кількість позицій (order.length).

function buildReceiptLine(order) {
  //console.log(order.join(', ')); //! Склеили по условию через ,
  const line = order.join(', ');
  return `${line} (${order.length})`;
}

console.log(buildReceiptLine(['Latte', 'Espresso', 'Cappuccino'])); // Latte, Espresso, Cappuccino (3)
console.log(buildReceiptLine(['Americano', 'Raf'])); // Americano, Raf (2)
console.log(buildReceiptLine(['Mocha'])); // Mocha (1)
*/

//! ====== МЕТОД split() ======
//! ** Метод строки, который разбивает строку на части и превращает её в массив **
/*
 * Сервіс гравіювання рахує ціну за кількістю слів у написі.
 * 1. Оголоси функцію getEngravingPrice(message, pricePerWord):
 *    message — напис зі слів, розділених пробілами; pricePerWord — ціна одного слова.
 * 2. Розбий message на слова методом split() (роздільник — пробіл).
 * 3. Порахуй кількість слів через length і помнож на pricePerWord.
 * 4. Поверни отриману суму.

function getEngravingPrice(message, pricePerWord) {
  //console.log(message);
  const words = message.split(' ');
  //console.log(words.length * pricePerWord);
  return words.length * pricePerWord;
}

console.log(getEngravingPrice('Forever', 20)); // 20
console.log(getEngravingPrice('With Love Forever', 15)); // 45
console.log(getEngravingPrice('Happy Birthday Dear Mom', 10)); // 40
*/

//! ====== МЕТОД concat() ======
//! ** Объединяет массив с другими массивами или отдельными значениями и возвращает новый массив **
/*
 * Кав'ярня зберігає напої у двох списках — каву й чай — і хоче
 * показати повне меню одним рядком.
 * 1. Оголоси функцію buildMenuLine(coffee, tea), яка приймає два масиви напоїв.
 * 2. Об'єднай coffee і tea в один масив методом concat().
 * 3. Перетвори об'єднаний масив на рядок через join() з роздільником ', '.
 * 4. Поверни отриманий рядок.
 
function buildMenuLine(coffee, tea) {
  const hotDrinks = coffee.concat(tea);

  return hotDrinks.join(', ');
}

console.log(buildMenuLine(['Espresso', 'Latte'], ['Green', 'Black'])); // Espresso, Latte, Green, Black
console.log(buildMenuLine(['Americano'], ['Herbal', 'Matcha'])); // Americano, Herbal, Matcha
*/

//! ====== МЕТОД includes() ======
//! *** Содержится ли этот элемент в массиве? → true или false ***
/*
 * Магазин перевіряє, чи є товар на складі.
 * Функція checkStorage(storage, item):
 *   storage — масив назв товарів у нижньому регістрі;
 *   item — назва товару, яку шукаємо (регістр будь-який).
 * 1. Приведи item до нижнього регістру методом toLowerCase().
 * 2. Якщо такий товар є в storage — поверни рядок виду
 *    `plum is available to order!` (з назвою товару в нижньому регістрі).
 * 3. Якщо товару немає — поверни рядок 'Sorry! We are out of stock!'.

function checkStorage(storage, item) {
  const lowerName = item.toLowerCase();
  const inStock = storage.includes(lowerName);

  if (inStock) {
    return `${lowerName} is available to order!`;
  } else {
    return `Sorry! We are out of stock!`;
  }
}

console.log(checkStorage(['apple', 'plum', 'pear'], 'plum')); // plum is available to order!
console.log(checkStorage(['apple', 'plum', 'pear'], 'pEAr')); // pear is available to order!
console.log(checkStorage(['apple', 'plum', 'pear'], 'carrot')); // Sorry! We are out of stock!
*/

//! ====== МЕТОД push() ======
//! *** Добавляет 1 или несколько элементов в конец! массива ***
/*
const values = [1, 2, 3, 4];
values.push(5); //! Метод push() добавляет элемент в конец массива.

console.log(values);
*/
//! ** В середине цикла (for) наполняем массив значениями от 1 до 5 **
/*
const values = [];
for (let i = 1; i <= 5; i += 1) { //! Оглашаем переменную цикла (let) от 1 - 5
  values.push(i);
}
console.log(values);
*/
//! push() возвращает новую длину массива
/*
 * SmileCare складає розклад прийомів на день — по одному слоту на годину.
 * Функція getAppointmentSlots(openHour, closeHour) повертає масив слотів
 * від години відкриття до години закриття включно.
 * 1. Створи порожній масив slots.
 * 2. У циклі for пройди по годинах від openHour до closeHour включно.
 * 3. На кожній годині додай у slots рядок виду `9:00` методом push()
 *    (використай шаблонний рядок).
 * 4. Поверни масив slots.

function getAppointmentSlots(openHour, closeHour) {
  const slots = []; //! Создали пустой массив
  for (let i = openHour; i <= closeHour; i += 1) { //! В цикле записали значения от openHour до closeHour с добавлением по 1 часу
    slots.push(`${i}:00`); //! Добавили в массив slots строку `9:00` методом push()
  }
  return slots;
}

console.log(getAppointmentSlots(9, 12)); // ['9:00', '10:00', '11:00', '12:00']
console.log(getAppointmentSlots(14, 16)); // ['14:00', '15:00', '16:00']
*/
//! ====== ОБХОД МАССИВА ЦИКЛОМ for ======
/*
const planets = ['Earth', 'Mars', 'Venus'];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
*/
/*
 * Функція calculateTotalPrice(order) рахує загальну суму замовлення.
 *   order — масив цін (числа).
 * 1. Оголоси змінну total зі значенням 0.
 * 2. Пройди масив order циклом for.
 * 3. На кожному кроці додай поточну ціну до total.
 * 4. Поверни total.

function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
console.log(calculateTotalPrice([164, 48, 291])); // 503
*/
//! ((((( ЗАДАЧА: ПАРНЫЕ ЧИСЛА )))))
/*
 * Функція getEvenNumbers(numbers) приймає масив чисел і повертає
 * новий масив, що містить лише парні числа.
 * Парне число ділиться на 2 без остачі (number % 2 === 0).
 * 1. Оголоси порожній масив evenNumbers.
 * 2. Пройди масив numbers циклом for.
 * 3. Якщо поточне число парне — додай його в evenNumbers методом push().
 * 4. Поверни evenNumbers.

function getEvenNumbers(numbers) {
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
console.log(getEvenNumbers([7, 10, 13, 20])); // [10, 20]
console.log(getEvenNumbers([1, 3, 5])); // []
*/
//! ((((( ЗАДАЧА: ОБЩИЕ ЭЛЕМЕНТЫ )))))
/*
 * Спільні елементи двох списків — це позиції, що є в обох.
 * Кав'ярня перевіряє, які напої зі списку бажань клієнта є в наявності.
 * Функція getCommonItems(wishlist, stock) повертає напої, що є в обох списках.
 * 1. Оголоси порожній масив commonItems.
 * 2. Пройди список wishlist циклом for.
 * 3. Якщо поточний напій є в stock (метод includes) — додай його
 *    в commonItems методом push.
 * 4. Поверни commonItems.

function getCommonItems(wishlist, stock) {
  const commonItems = [];
  for (let i = 0; i < wishlist.length; i += 1) {
    //console.log(wishlist[i]);
    //console.log(stock.includes(wishlist[i])); //! Проверка на наличие элемента в массиве stock
    const item = wishlist[i];
    if (stock.includes(item)) {
      commonItems.push(item);
    }
  }
  return commonItems;
}

console.log(
  getCommonItems(
    ['Latte', 'Matcha', 'Espresso', 'Raf'],
    ['Espresso', 'Americano', 'Latte']
  )
); // ['Latte', 'Espresso']
console.log(
  getCommonItems(['Cappuccino', 'Latte'], ['Latte', 'Mocha', 'Cappuccino'])
); // ['Cappuccino', 'Latte']
console.log(getCommonItems(['Green', 'Black'], ['Herbal', 'Matcha'])); // []
*/