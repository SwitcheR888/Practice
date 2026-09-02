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
