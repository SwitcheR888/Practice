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

/*if (5 > 3) {
  const message = 'Order accepted'; //! Переменная, объявленная через let или const внутри блока {}, доступна внутри этого блока, но недоступна снаружи.
  console.log(message);
}

console.log(message);*/ //! Здесь переменная не читается интерпретатором, т.к. она находится за пределами блока

//!------- ПРЕОБРАЗОВАНИЕ ТИПОВ (ЛОГИЧЕСКОЕ) -------

//! --- ВСЕГДА false!!! ---
/*console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
//! --- true ---
console.log(Boolean('false')); //! любой непустой рядок для интерпретатора = true
console.log(Boolean('hello')); //! рядок = true
console.log(Boolean(42));*/ //! все цифры кроме 0 = true

//! --- ПРИМЕР ПРЕОБРАЗОВАНИЯ ТИПОВ ---
/*const discount = 0;

if (discount) {
  //! Интерпретатор подставляет значение 0. После чего, приводит в булевое значение (т.е. true или false)
  console.log('Discount applied'); //! Если вместо 0 будет стоять любое другое число/цифра, это будет значение true и выведится это сообщение "Discount applied"
} else {
  console.log('No discount');
} */

//! --------- ПРИМЕР ПРЕОБРАЗОВАНИЯ ТИПОВ ---------
//! --------- ОПЕРАТОР && (ищет первое falsy значение)---------

/*const age = 20;

console.log(age > 10 && age < 30); //! && - оператор. <> - операнды
*/

/*
 * У Sunny Coffee безкоштовна доставка лише для постійних клієнтів
 * з великим замовленням.
 * 1. Оголоси функцію getDeliveryPrice з двома параметрами:
 *    isMember (чи постійний клієнт) і orderSum (сума замовлення).
 * 2. За допомогою if...else поверни вартість доставки:
 *    - якщо клієнт постійний І сума замовлення не менша за 500 —
 *      доставка безкоштовна, поверни 0;
 *    - інакше — поверни 30.
 *    Обидві умови поєднай через &&.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.

function getDeliveryPrice(isMember, orderSum) {
  if (isMember && orderSum >= 500) {
    return 0;
  } else {
    return 30;
  }
}

console.log(getDeliveryPrice(true, 600)); // 0
console.log(getDeliveryPrice(true, 300)); // 30
console.log(getDeliveryPrice(false, 600)); // 30
*/
//! && Ищет ПЕРВОЕ falsy значение. Если нашёл → возвращает его. Если не нашёл → возвращает последнее значение.

//! --------- ОПЕРАТОР "ИЛИ" || (ищет первое truthy значение) ---------
/*const age = 7;
console.log(age < 12 || age > 65); //! 7 < 12 = true
*/

/*
 * У клініці SmileCare огляд безкоштовний для дітей і пенсіонерів.
 * 1. Оголоси функцію getCheckupPrice з параметром age (вік пацієнта).
 * 2. За допомогою if...else поверни вартість огляду:
 *    - якщо вік менший за 18 АБО більший за 65 — огляд безкоштовний, поверни 0;
 *    - інакше — поверни 300.
 *    Обидві умови поєднай через ||.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.

function getCheckupPrice(age) {
  if (age < 18 || age > 65) {
    return 0;
  } else {
    return 300;
  }
}

console.log(getCheckupPrice(12)); // 0 //! 12 < 18 = true; 12 > 65 = false (Останется true, т.к. верное хотя бы одно условие (первое))
console.log(getCheckupPrice(70)); // 0 //! 70 < 18 = false; 70 > 65 = true (Останется true, т.к. верное хотя бы одно условие (второе))
console.log(getCheckupPrice(35)); // 300 */ //! 35 < 18 = false; 35 > 65 = false (Ни одно из условий не выполнено. Остается false)
//! || Ищет ПЕРВОЕ truthy значение. Если нашёл → возвращает его. Если не нашёл → возвращает последнее значение.

//! --------- ОПЕРАТОР ! (НЕ...) ---------
/*
console.log(!true); // false
console.log(!false); // true
console.log(!0); // true
console.log(!'Poly'); // false
*/
/*
const isBlocked = false; //! Пользователь заблокирован - нет
if (!isBlocked) { //! Оператор ! делает инверсию (т.е. меняет на противоположное значение) !Заблокирован = true (да, заблокирован)
  console.log('Can chat'); //! В консоле выводится это сообщение.
} else {
  console.log('Blocked');
}
*/
/*
 * У Sunny Coffee пропозиція «Замовити ще» показується, лише коли
 * кав'ярня відкрита і це не перше замовлення клієнта.
 * 1. Оголоси функцію getReorderMessage з двома параметрами:
 *    isOpen (чи відкрита кав'ярня) і isFirstOrder (чи перше замовлення).
 * 2. За допомогою if...else поверни повідомлення:
 *    - якщо кав'ярня відкрита І замовлення НЕ перше — поверни "Order again?";
 *    - інакше — поверни "No offer".
 *    Для умови «не перше» використай оператор !.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.

function getReorderMessage(isOpen, isFirstOrder) {
  if (isOpen && !isFirstOrder) { //! НЕ первый заказ = ! (не) + условие isFirstOrder (первый заказ)
    return 'Order again?';
  } else {
    return 'No offer';
  }
}

console.log(getReorderMessage(true, false)); // Order again?
console.log(getReorderMessage(true, true)); // No offer
console.log(getReorderMessage(false, false)); // No offer
*/

//! --------- СВОЙСТВА И МЕТОДЫ ---------
//! СВОЙСТВО length
//const message = 'JavaScript is awesome';

//console.log(message.length); //! 21 символ включая пробелы.

//! МЕТОД toUpperCase()
//const message = 'JavaScript is awesome';

//console.log(message.toUpperCase()); //! toUpperCase() - строчный метод

//! -------- МЕТОДЫ toLowerCase() и toUpperCase() --------
/*
const brand = 'sAmSuNg';

console.log('brand', brand);
console.log(brand.toLowerCase()); //! все строчные = samsung

console.log('brand', brand);
console.log(brand.toUpperCase()); //! ВСЕ ПРОПИСНЫЕ = SAMSUNG
*/

/*
 * Функція приводить рядок до потрібного регістру.
 * 1. Оголоси функцію normalizeInput з двома параметрами:
 *    input (рядок для перетворення) і to (режим: "upper" або "lower").
 * 2. Поверни з функції:
 *    - якщо to дорівнює "upper" — рядок input у верхньому регістрі;
 *    - інакше — рядок input у нижньому регістрі.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */
//! ВАРИАНТ № 1
/*function normalizeInput(input, to) {
   if (to === 'upper') {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
} 
console.log(normalizeInput('Big SALE', 'lower')); // big sale
console.log(normalizeInput('Big SALE', 'upper')); // BIG SALE
console.log(normalizeInput('Hello World', 'upper')); // HELLO WORLD 
*/

//! ВАРИАНТ № 2 (ТЕРНАРНЫЙ ОПЕРАТОР)
/*function normalizeInput(input, to) {
  const result = to === 'upper' ? input.toUpperCase() : input.toLowerCase();
  return result;
}

console.log(normalizeInput('Big SALE', 'lower')); // big sale
console.log(normalizeInput('Big SALE', 'upper')); // BIG SALE
console.log(normalizeInput('Hello World', 'upper')); // HELLO WORLD
*/

//! -------- МЕТОД INCLUDES() --------
//const username = 'Kyryl F-Sky';

//console.log(username.includes('Kyryl')); // true //! Искать можно от 1 буквы до целых слов. Обязательно сохраняя свойство регистра
//console.log(username.includes('Kyryl')); // false //! KyrYl в поиске не отобразится.

//! --- МЕТОД INCLUDES() 1 ---
/* const message = 'Please buy our stuff!';

if (message.includes('buy')) {
  console.log('Spam');
} else {
  console.log('OK');
} */

//! --- МЕТОД INCLUDES() 2 ---
/*const message = 'Please buy our stuff!';
const hasSpam = message.includes('buy');

console.log(hasSpam); //! Boolean значение

if (hasSpam) {
  console.log('Spam');
} else {
  console.log('Ok');
}
*/

//! --- ПРАКТИКА INCLUDES() ---
/*
 * Функція перевіряє, чи міститься ім'я в повному імені.
 * Регістр введених рядків наперед не відомий, тому порівнювати
 * потрібно без огляду на регістр.
 * 1. Оголоси функцію containsName з двома параметрами:
 *    fullName (повне ім'я) і firstName (ім'я для пошуку).
 * 2. Зведи обидва рядки до нижнього регістру через toLowerCase().
 * 3. Поверни результат перевірки: чи містить fullName підрядок firstName
 *    (використай includes()).
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.

function containsName(fullName, firstName) {
  const lowerFullName = fullName.toLowerCase();
  const lowerFirstName = firstName.toLowerCase();

  return lowerFullName.includes(lowerFirstName);
}

console.log(containsName('Jason Neis', 'Jason')); // true
console.log(containsName('Jason Neis', 'jAsOn')); // true
console.log(containsName('Jason Neis', 'Jacob')); // false */

//! --- МЕТОДЫ startsWith() и endsWith() ---
/*
 * Функція перевіряє, чи має файл потрібне розширення.
 * 1. Оголоси функцію checkFileExtension з двома параметрами:
 *    fileName (ім'я файлу з розширенням) і extension (розширення для перевірки).
 * 2. За допомогою if...else поверни повідомлення:
 *    - якщо fileName закінчується на extension — "File extension matches";
 *    - інакше — "File extension does not match".
 *    Для перевірки закінчення використай endsWith().
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.

function checkFileExtension(fileName, extension) {
  if (fileName.endsWith(extension)) {
    return 'File extension matches';
  } else {
    return 'File extension does not match';
  }
}

console.log(checkFileExtension('styles.css', '.css')); // File extension matches
console.log(checkFileExtension('styles.css', '.js')); // File extension does not match
console.log(checkFileExtension('app.js', '.js')); // File extension matches
*/

//! --- МЕТОД slice() ---
//! Пример где применяется slice(): есть список из 100 элементов, но на странице нужно показать только первые 10: const firstTen = items.slice(0, 10);
/*const fullName = 'Kyryl Fedorovskyi';
console.log(fullName[0]); //! fullName[0] - покажет только 1 символ!
console.log(fullName.slice(0, 9)); //! Консоль выведет: Kyryl Fed (т.е. все индексы включая пробелы). Счет начинается с 0
console.log(fullName.slice(0)); //! Если не указывать конечный индекс, интерпретатор прочитает все, что указано в 'fullName'
const firstName = fullName.slice(0, 5);
console.log(firstName); //! slice(0, 5) скопирует Kyryl
console.log(fullName); //! Kyryl Fedorovskyi - slice() не меняет оригинальный рядок fullName, а делает копию
*/
/*
 * Дата народження зберігається у форматі "РРРР-ММ-ДД", наприклад "2024-03-15".
 * Рік — це перші чотири символи рядка.
 * 1. Оголоси функцію getBirthYearMessage з параметром birthDate.
 * 2. За допомогою slice() візьми рік — перші чотири символи birthDate —
 *    і збережи його у змінну year.
 * 3. Поверни рядок виду "You were born in <рік>".
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.

function getBirthYearMessage(birthDate) {
  const year = birthDate.slice(0, 4);
  return `You were born in ${year}`;
}

console.log(getBirthYearMessage('2024-03-15')); // You were born in 2024
console.log(getBirthYearMessage('1998-12-01')); // You were born in 1998
console.log(getBirthYearMessage('2010-07-20')); // You were born in 2010*/
