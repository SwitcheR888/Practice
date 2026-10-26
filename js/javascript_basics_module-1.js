'use strict';
//!----------- ЗНАЧЕНИЕ Math. -----------
/* const averageVisit = 42.6;
const visitA = 30;
const visitB = 55;
const visitC = 45;

const roundedAverage = Math.round(averageVisit);
console.log(roundedAverage);

const longestVisit = Math.max(visitA, visitA, visitC);
console.log(longestVisit);

const shortestVisit = Math.min(visitA, visitB, visitC);
console.log(shortestVisit); */

//!----------- ОБЪЯВЛЕНИЕ и ВЫЗОВ ФУНКЦИИ -----------
/* function showWelcome() {
  console.log(`Welcome to SmileCare!`);
}
showWelcome();
showWelcome();
showWelcome(); */

//!----------- ФУНКЦИЯ 2 -----------
/* function showTotal(pricePerItem, quantity) {
  console.log(`pricePerItem`, pricePerItem);
  console.log(`quantity`, quantity);
  console.log(`Total: ${pricePerItem * quantity}`);
}
showTotal(45, 2);
showTotal(60, 3); */

//!----------- ПАРАМЕТРЫ И АРГУМЕНТЫ -----------
/* function showOrder(coffeeName, quantity) {
  console.log(`${coffeeName} - ${quantity}`);
}
showOrder(`Latte`, 2);
showOrder(`Macchiato`, 3); */

//!----------- ВОЗВРАТ ЗНАЧЕНИЯ (return) -----------
/* function getServiceCost(pricePerVisit, visitsCount) {
  const cost = pricePerVisit * visitsCount;
  return cost;
}
const totalCost = getServiceCost(350, 10);
console.log(`Total cost: ${totalCost}$ (US Dollar)`);

console.log(`Total cost: ${getServiceCost(100, 37)}$ (US Dollar)`);
console.log(`Total cost: ${getServiceCost(500, 10)}$ (US Dollar)`); */

//!----------- return (не в теле функции) -----------
/* function getTotal(pricePerItem, quantity) {
  pricePerItem * quantity;
}
const value = getTotal(5, 10);
console.log(value); */

//!----------- ЛЮБОЙ КОД ПОСЛЕ return - НЕ ВЫПОЛНЯЕТСЯ!!! -----------
/* function getTotal(pricePerItem, quantity) {
  return pricePerItem * quantity;

  console.log(`Hello world`);
}
const value = getTotal(5, 10);
console.log(value); */

//!----------- ПОРЯДОК ВЫПОЛНЕНИЯ КОДА -----------
/* function showGreeting() {
  console.log('Welcome to Sunny Coffee!'); // Тело функции
}

console.log('Before the call');
showGreeting(); //! Здесь интерпретатор останавливается и возвращает управление в тело функции
/* //! После завершения функции управления возвращается на место вызова и код продолжается дальше. */
/* console.log('After the call'); */

//!----------- ОБЛАСТЬ ВИДИМОСТИ ФУНКЦИИ -----------
/* const shopComputer = 'PC 4U'; */ //! Если задать глобальную переменную shopComputer перед функцией, ее можна вывести из любого места...

/* function showTotal() {
  console.log(shopComputer); */ //! ...В теле функции shopComputer

/*  const total = '500'; */ //! Переменной total за пределами функции нет. Такой вид переменной называется -- Локальная
/*   console.log(total);
} */

/* showTotal();
console.log(shopComputer); */ //! ...И после тела функции shopComputer

//!----------- ЗАДАЧА № 1 -----------
/*
 * Функція makeMessage складає повідомлення про покупку.
 * Параметри задаються під час виклику:
 * - name — назва товару;
 * - price — ціна товару.
 * Доповни функцію так, щоб вона повертала рядок у форматі:
 * You picked <name>, price per item is <price> credits

function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;
  return message;
}
console.log(makeMessage(`Chablis`, 1000)); */

//!----------- ЗАДАЧА № 2 -----------
/*
 * Кавʼярні Sunny Coffee потрібна функція, що збирає рядок-чек для позиції замовлення.
 * Напиши функцію makeReceiptLine з трьома параметрами:
 * - drinkName — назва напою;
 * - cupsCount — кількість порцій;
 * - pricePerCup — ціна однієї порції.
 * Функція має повертати (return) шаблонний рядок такого формату
 * (замість позначок у дужках підстав відповідні значення):
 *   [назва] x[кількість] — [ціна] UAH each, [сума] UAH total
 * де [сума] — це кількість, помножена на ціну однієї порції.
 * Приклад результату для "Latte", 2, 60:
 *   Latte x2 — 60 UAH each, 120 UAH total

function makeReceiptLine(drinkName, cupsCount, pricePerCup) {
  const total = cupsCount * pricePerCup;
  return `${drinkName} x${cupsCount} — ${pricePerCup} UAH each, ${total} UAH total`;
}

console.log(makeReceiptLine(`Espresso`, 5, 80));
console.log(makeReceiptLine(`Ice Latte`, 5, 160));
console.log(makeReceiptLine(`Gabba Tea`, 5, 250));*/

//!----------- ЗАДАЧА № 3 (Math.min / Math.max)-----------
/*
 * У піцерії Pizza Time акція: із трьох піц найдешевша йде безкоштовно.
 * Напиши функцію priceToPay з трьома параметрами — цінами трьох піц:
 * - firstPizza;
 * - secondPizza;
 * - thirdPizza.
 * Що має зробити функція:
 * 1. Порахувати повну суму трьох піц.
 * 2. Знайти найдешевшу з трьох цін через Math.min.
 * 3. Відняти найдешевшу від суми — це й буде ціна до сплати.
 * 4. Повернути (return) отримане значення.
 * Приклад: для 180, 220, 150 сума 550, найдешевша 150, до сплати 400.


function priceToPay(firstPizza, secondPizza, thirdPizza) {
  const total = firstPizza + secondPizza + thirdPizza;
  const cheapest = Math.min(firstPizza, secondPizza, thirdPizza);
  return total - cheapest;
}

console.log(priceToPay(220, 360, 195)); // 580
console.log(priceToPay(200, 300, 155)); // 500
console.log(priceToPay(410, 205, 280)); // 690 */
