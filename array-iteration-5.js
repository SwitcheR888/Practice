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
/*
const drinks = ['Espresso', 'Cappuchino', 'Latte'];

const drinksInUpperCase = drinks.map(drink => drink.toUpperCase());

console.log(drinksInUpperCase); // ['ESPRESSO', 'CAPPUCHINO', 'LATTE']
*/
//! *** 2 ***
/*
 * Есть массив с числами 45, 60, 75
 * Нужно получить новый массив чисел такой же длинны, где каждое число будет умноженное на * 0.9 (т.е. - 10%)
 *
 * 1. Перебрать массив поэлементно (map)
 * 2. В новом массиве каждый элемент должен быть умножен на 0.9
 */
//! Вариант 1
//const prices = [45, 60, 75];
// const discountPrices = [];

// for (const price of prices) {
//   //  console.log(price * 0.9);
//   discountPrices.push(price * 0.9);
// }

// console.log(discountPrices);

//! Вариант 2
/*
const prices = [45, 60, 75];

const discountPrices = prices.map(price => {
  //! Метод map перебирает текущий массив + создает новый, на каждой итерации цикла вызывает
  //! callback функцию и передает ей текущее значение на итерации. Возвращает новый массив
  return price * 0.9;
});

console.log(discountPrices);
*/
//! *** 3 ***
/*
 * Функція getDrinkCodes(drinks) повертає новий масив кодів напоїв для каси.
 * Код — це перші три літери назви у верхньому регістрі.
 *   drinks — масив назв напоїв (рядки).
 * 1. Оголоси getDrinkCodes як стрілочну функцію.
 * 2. Перебери масив drinks методом map().
 * 3. У колбеку збережи перші три літери назви у змінну shortName
 *    за допомогою методу slice().
 * 4. Поверни з колбека shortName у верхньому регістрі.
 * 5. Поверни новий масив, який дав map().

const getDrinkCodes = drinks => {
  return drinks.map(drink => {
    const shortName = drink.slice(0, 3);

    return shortName.toUpperCase();
  });
};

console.log(getDrinkCodes(['Espresso', 'Cappuccino', 'Latte'])); // ['ESP', 'CAP', 'LAT']
console.log(getDrinkCodes(['Tea'])); // ['TEA']
console.log(getDrinkCodes(['Americano', 'Mocha'])); // ['AME', 'MOC']
*/

//! ==== МЕТОД map() и МАССИВ ОБЪЕКТОВ ====
/*
const menu = [
  { name: 'Espresso', price: 45 },
  { name: 'Cappuccino', price: 60 },
  { name: 'Latte', price: 75 },
];

const names = menu.map(item => {
  return item.name;
  //  console.log(item.name, item.price);
});

console.log(names); // ['Espresso', 'Cappuccino', 'Latte']

const prices = menu.map(item => {
  return item.price;
});

console.log(prices); // [45, 60, 75]
*/

//! *** ЗАДАЧА ***
/*
 * Функція getPriceList(services) повертає новий масив рядків для прайсу.
 *   services — масив обʼєктів з властивостями name і price.
 * 1. Оголоси getPriceList як стрілочну функцію.
 * 2. Перебери масив services методом map().
 * 3. У колбеку поверни рядок у форматі 'Cleaning: 450 UAH'.
 * 4. Поверни новий масив, який дав map().

const getPriceList = services => {
  return services.map(service => {
    return `${service.name}: ${service.price} UAH`;
  });
};

console.log(
  getPriceList([
    { name: 'Cleaning', price: 450 },
    { name: 'Whitening', price: 1200 },
    { name: 'Filling', price: 800 },
  ])
); // ['Cleaning: 450 UAH', 'Whitening: 1200 UAH', 'Filling: 800 UAH']

console.log(
  getPriceList([
    { name: 'Crown', price: 3500 },
    { name: 'Implant', price: 9000 },
  ])
); // ['Crown: 3500 UAH', 'Implant: 9000 UAH']
*/

//! *** ЗАДАЧА: ПОЧТА ПОЛЬЗОВАТЕЛЯ ***
/*
 * Функція getUserEmails(users) повертає масив поштових адрес користувачів.
 *   users — масив обʼєктів користувачів.
 * 1. Оголоси getUserEmails як стрілочну функцію.
 * 2. Перебери масив users методом map().
 * 3. У колбеку поверни значення властивості email поточного користувача.
 * 4. Поверни новий масив, який дав map().

const allUsers = [
  {
    name: 'Alex',
    email: 'alex@indexia.com',
    eyeColor: 'blue',
    friends: ['Sam'],
    isActive: false,
    balance: 2811,
    skills: ['html', 'css'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Nora',
    email: 'nora@tubesys.com',
    eyeColor: 'blue',
    friends: ['Kim', 'Sam'],
    isActive: true,
    balance: 3821,
    skills: ['figma', 'html', 'css', 'testing', 'git'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Max',
    email: 'max@xinware.com',
    eyeColor: 'green',
    friends: ['Leo', 'Iris', 'Kim'],
    isActive: false,
    balance: 3793,
    skills: ['sql', 'node', 'git', 'html', 'javascript'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Iris',
    email: 'iris@omatom.com',
    eyeColor: 'green',
    friends: ['Nora', 'Leo'],
    isActive: true,
    balance: 2278,
    skills: ['react', 'javascript', 'css'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Sam',
    email: 'sam@nurali.com',
    eyeColor: 'blue',
    friends: ['Alex', 'Max'],
    isActive: true,
    balance: 3951,
    skills: ['git', 'node', 'sql'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Leo',
    email: 'leo@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Iris', 'Kim'],
    isActive: false,
    balance: 1498,
    skills: ['testing', 'html', 'figma'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Kim',
    email: 'kim@kog.com',
    eyeColor: 'brown',
    friends: ['Nora', 'Max'],
    isActive: true,
    balance: 2764,
    skills: ['javascript', 'react', 'node'],
    gender: 'female',
    age: 39,
  },
];

// const getUserEmails = users => {
//   return users.map(user => user.email);
//   //return user.email; //! Можно написать короче. Неявным возвратом
// };

const getUserEmails = users => users.map(user => user.email);

console.log(getUserEmails(allUsers));
// ['alex@indexia.com', 'nora@tubesys.com', 'max@xinware.com',
//  'iris@omatom.com', 'sam@nurali.com', 'leo@furnigeer.com', 'kim@kog.com']
*/

//! ==== МЕТОД filter() ====
/*
const numbers = [1, 2, 3, 4, 5, 6];

/*
 * С этого массива нужны только четные числа

const evenNumbers = numbers.filter(number => {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]
*/

//! *** ПРИМЕР ***
/*
const prices = [320, 750, 180, 1200, 460];

/*
 * Необходимо оставить только те чилса, которые больше 500

const expensivePrices = prices.filter(price => price > 500);

console.log(expensivePrices); // [750, 1200]
*/

//! *** ЗАДАЧА ***
/*
const numbers = [12, 5, 27, 8, 31, 14, 3, 20];
/*
 * Создай новый массив bigNumbers, в котором останутся только числа больше 15.

const bigNumbers = numbers.filter(number => number > 15);
console.log(bigNumbers);
*/

//! *** ПРАКТИКА ***
/*
 * Функція getPricesInRange(prices, minPrice, maxPrice) повертає новий масив
 * з цін, які входять у діапазон від minPrice до maxPrice включно.
 *   prices — масив цін (числа).
 *   minPrice, maxPrice — межі діапазону.
 * 1. Оголоси getPricesInRange як стрілочну функцію.
 * 2. Перебери масив prices методом filter().
 * 3. У колбеку поверни true лише для тих цін, які не менші за minPrice
 *    і не більші за maxPrice.
 * 4. Поверни новий масив, який дав filter().

const menuPrices = [55, 120, 40, 85, 95, 25, 150];

const getPricesInRange = (prices, minPrice, maxPrice) => {
  return prices.filter(price => {
    return price >= minPrice && price <= maxPrice;
  });
};

// const getPricesInRange = (prices, minPrice, maxPrice) => {
//   return prices.filter(price => price >= minPrice && price <= maxPrice); //! Сокращенный вараинт, но не подробный
// };

console.log(getPricesInRange(menuPrices, 50, 100)); // [55, 85, 95]
console.log(getPricesInRange(menuPrices, 25, 45)); // [40, 25]
console.log(getPricesInRange(menuPrices, 200, 300)); // []
*/

//! ==== ФИЛЬТРАЦИЯ МАССИВА ОБЪЕКТОВ ====
//! *** ПРИМЕР ***
/*
* Вместо чисел, теперь объекты.
--
* Нужно оставить только пользователей, которым 18 лет и больше.

const users = [
  { name: 'Alex', age: 17 },
  { name: 'Bob', age: 25 },
  { name: 'Kate', age: 19 },
  { name: 'Mike', age: 30 },
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);
// 0: {name: "Bob", age: 25}
// 1: {name: "Kate", age: 19}
// 2: {name: "Mike", age: 30}
*/

//! *** ПРАКТИКА ***
/*
 * Масив books містить книги з властивостями title, author і rating.
 * 1. Оголоси змінну topRatedBooks і поклади в неї масив книг,
 *    рейтинг яких не менший за minRating. Використай метод filter().
 * 2. Оголоси змінну booksByAuthor і поклади в неї масив книг,
 *    автор яких збігається зі значенням змінної author.

const books = [
  { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
  { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
  { title: 'The Glass Garden', author: 'Leo', rating: 7.75 },
  { title: 'North of Winter', author: 'Kim', rating: 7.94 },
  { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 },
];

const minRating = 8;
const author = 'Alex';

const topRatedBooks = books.filter(book => book.rating >= minRating);

console.log(topRatedBooks);
// [
//   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
//   { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
//   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 }
// ]

const booksByAuthor = books.filter(book => book.author === author);

console.log(booksByAuthor);
// [
//   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
//   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 }
// ]
*/

//! *** ЗАДАЧА: ПОИСК ПО ЦВЕТУ ГЛАЗ ***
/*
 * Функція getUsersWithEyeColor(users, color) повертає масив користувачів,
 * у яких колір очей збігається зі значенням параметра color.
 *   users — масив обʼєктів користувачів.
 *   color — колір очей (рядок).
 * 1. Оголоси getUsersWithEyeColor як стрілочну функцію.
 * 2. Перебери масив users методом filter().
 * 3. У колбеку поверни true лише для тих користувачів,
 *    у яких властивість eyeColor дорівнює color.
 * 4. Поверни новий масив, який дав filter().

const allUsers = [
  {
    name: 'Alex',
    email: 'alex@indexia.com',
    eyeColor: 'blue',
    friends: ['Sam'],
    isActive: false,
    balance: 2811,
    skills: ['html', 'css'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Nora',
    email: 'nora@tubesys.com',
    eyeColor: 'blue',
    friends: ['Kim', 'Sam'],
    isActive: true,
    balance: 3821,
    skills: ['figma', 'html', 'css', 'testing', 'git'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Max',
    email: 'max@xinware.com',
    eyeColor: 'green',
    friends: ['Leo', 'Iris', 'Kim'],
    isActive: false,
    balance: 3793,
    skills: ['sql', 'node', 'git', 'html', 'javascript'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Iris',
    email: 'iris@omatom.com',
    eyeColor: 'green',
    friends: ['Nora', 'Leo'],
    isActive: true,
    balance: 2278,
    skills: ['react', 'javascript', 'css'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Sam',
    email: 'sam@nurali.com',
    eyeColor: 'blue',
    friends: ['Alex', 'Max'],
    isActive: true,
    balance: 3951,
    skills: ['git', 'node', 'sql'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Leo',
    email: 'leo@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Iris', 'Kim'],
    isActive: false,
    balance: 1498,
    skills: ['testing', 'html', 'figma'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Kim',
    email: 'kim@kog.com',
    eyeColor: 'brown',
    friends: ['Nora', 'Max'],
    isActive: true,
    balance: 2764,
    skills: ['javascript', 'react', 'node'],
    gender: 'female',
    age: 39,
  },
];

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(allUsers, 'blue'));
// Масив із трьох користувачів: Alex, Nora, Sam

console.log(getUsersWithEyeColor(allUsers, 'green'));
// Масив із двох користувачів: Max, Iris

console.log(getUsersWithEyeColor(allUsers, 'red'));
// []
*/

//! ==== МЕТОД find() ====
/*
const users = [
  { name: 'Anna', age: 17 },
  { name: 'Alex', age: 25 },
  { name: 'Maria', age: 19 },
  { name: 'John', age: 32 },
];

/*
 * Напиши функцию: findAdult(users) которая с помощью метода find() должна найти и вернуть первого пользователя,
 * которому исполнилось 18 лет или больше.
 *----------
 * Используй именно find().
 * Не используй for, while или filter().
 * Функция должна принимать массив users.
 * Функция должна вернуть найденный объект.
 * Вызови функцию через console.log(), чтобы увидеть результат.

function findAdult(users) {
  return users.find(user => user.age >= 18);
}

console.log(findAdult(users)); // { name: "Alex", age: 25 }
*/

//! *** ЗАДАЧА: "ПОИСК ПО ПОЧТЕ"
/*
 * Функція getUserWithEmail(users, email) повертає обʼєкт користувача,
 * пошта якого збігається зі значенням параметра email.
 *   users — масив обʼєктів користувачів.
 *   email — поштова адреса (рядок).
 * 1. Оголоси getUserWithEmail як стрілочну функцію.
 * 2. Перебери масив users методом find().
 * 3. У колбеку поверни true для того користувача, у якого властивість
 *    email дорівнює параметру email.
 * 4. Поверни результат find().

const allUsers = [
  {
    name: 'Alex',
    email: 'alex@indexia.com',
    eyeColor: 'blue',
    friends: ['Sam'],
    isActive: false,
    balance: 2811,
    skills: ['html', 'css'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Nora',
    email: 'nora@tubesys.com',
    eyeColor: 'blue',
    friends: ['Kim', 'Sam'],
    isActive: true,
    balance: 3821,
    skills: ['figma', 'html', 'css', 'testing', 'git'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Max',
    email: 'max@xinware.com',
    eyeColor: 'green',
    friends: ['Leo', 'Iris', 'Kim'],
    isActive: false,
    balance: 3793,
    skills: ['sql', 'node', 'git', 'html', 'javascript'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Iris',
    email: 'iris@omatom.com',
    eyeColor: 'green',
    friends: ['Nora', 'Leo'],
    isActive: true,
    balance: 2278,
    skills: ['react', 'javascript', 'css'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Sam',
    email: 'sam@nurali.com',
    eyeColor: 'blue',
    friends: ['Alex', 'Max'],
    isActive: true,
    balance: 3951,
    skills: ['git', 'node', 'sql'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Leo',
    email: 'leo@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Iris', 'Kim'],
    isActive: false,
    balance: 1498,
    skills: ['testing', 'html', 'figma'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Kim',
    email: 'kim@kog.com',
    eyeColor: 'brown',
    friends: ['Nora', 'Max'],
    isActive: true,
    balance: 2764,
    skills: ['javascript', 'react', 'node'],
    gender: 'female',
    age: 39,
  },
];

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(allUsers, 'kim@kog.com'));
// Обʼєкт користувача Kim

console.log(getUserWithEmail(allUsers, 'iris@omatom.com'));
// Обʼєкт користувача Iris

console.log(getUserWithEmail(allUsers, 'unknown@mail.com'));
// undefined
*/

//! ==== МЕТОД reduce() ====
//! ** reduce() проходит по элементам массива и постепенно накапливает один общий результат **
/*
const products = [
  { name: 'Apple', price: 50 },
  { name: 'Banana', price: 30 },
  { name: 'Orange', price: 40 },
];

const total = products.reduce((sum, product) => {
  return sum + product.price;
}, 0); //! 0 - (initial value) начальное значение аккумулятора (acc). «Начни считать с нуля».

console.log(total); // 120
*/

//! *** ЗАДАЧА ***
/*
 * Функція calculateTotalBalance(users) повертає суму коштів усіх користувачів.
 *   users — масив обʼєктів користувачів.
 * 1. Оголоси calculateTotalBalance як стрілочну функцію.
 * 2. Перебери масив users методом reduce() з початковим значенням 0.
 * 3. У колбеку додай до накопиченого значення властивість balance
 *    поточного користувача.
 * 4. Поверни результат reduce().

const allUsers = [
  {
    name: 'Alex',
    email: 'alex@indexia.com',
    eyeColor: 'blue',
    friends: ['Sam'],
    isActive: false,
    balance: 2811,
    skills: ['html', 'css'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Nora',
    email: 'nora@tubesys.com',
    eyeColor: 'blue',
    friends: ['Kim', 'Sam'],
    isActive: true,
    balance: 3821,
    skills: ['figma', 'html', 'css', 'testing', 'git'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Max',
    email: 'max@xinware.com',
    eyeColor: 'green',
    friends: ['Leo', 'Iris', 'Kim'],
    isActive: false,
    balance: 3793,
    skills: ['sql', 'node', 'git', 'html', 'javascript'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Iris',
    email: 'iris@omatom.com',
    eyeColor: 'green',
    friends: ['Nora', 'Leo'],
    isActive: true,
    balance: 2278,
    skills: ['react', 'javascript', 'css'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Sam',
    email: 'sam@nurali.com',
    eyeColor: 'blue',
    friends: ['Alex', 'Max'],
    isActive: true,
    balance: 3951,
    skills: ['git', 'node', 'sql'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Leo',
    email: 'leo@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Iris', 'Kim'],
    isActive: false,
    balance: 1498,
    skills: ['testing', 'html', 'figma'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Kim',
    email: 'kim@kog.com',
    eyeColor: 'brown',
    friends: ['Nora', 'Max'],
    isActive: true,
    balance: 2764,
    skills: ['javascript', 'react', 'node'],
    gender: 'female',
    age: 39,
  },
];

const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};
//! total - аккумулятор
//! 0 - начальное значение

console.log(calculateTotalBalance(allUsers)); // 20916
*/

//! ==== МЕТОД toSorted() ====
/*
const numbers = [3, 1, 4, 2];

const sortedNumbers = numbers.toSorted();

console.log(sortedNumbers); // [1, 2, 3, 4]
console.log(numbers); // [3, 1, 4, 2]
*/

//! *** ПРИМЕР С ЧИСЛАМИ ***
/*
const prices = [45, 120, 60, 8, 75];

console.log(prices.toSorted((a, b) => a - b)); //! Числа сорт. от меньшего к большему // a - b выведет [8, 45, 60, 75, 120]

console.log(prices.toSorted((a, b) => b - a)); //! Числа сорт. от большего к меньшему // b - a выведет [120, 75, 60, 45, 8]
*/

//! *** ЗАДАЧА ***
/*
 * Онлайн-бібліотека показує книги за роком видання — від старіших
 * до новіших або навпаки.
 * 1. Оголоси змінну ascendingReleaseYears і поклади в неї копію масиву
 *    releaseYears, відсортовану за зростанням. Використай метод toSorted()
 *    з функцією порівняння.
 * 2. Оголоси змінну descendingReleaseYears і поклади в неї копію масиву
 *    releaseYears, відсортовану за спаданням.

const releaseYears = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseYears = releaseYears.toSorted((a, b) => a - b);

console.log(ascendingReleaseYears);
// [1967, 1973, 1984, 1997, 2008, 2012, 2016]

const descendingReleaseYears = releaseYears.toSorted((a, b) => b - a);

console.log(descendingReleaseYears);
// [2016, 2012, 2008, 1997, 1984, 1973, 1967]
*/

//! *** ПРИМЕР: СОРТИРОВКА ОБЪЕКТОВ ***
/*
const menu = [
  { name: 'Latte', price: 75 },
  { name: 'Espresso', price: 45 },
  { name: 'Mocha', price: 90 },
  { name: 'Cappuccino', price: 60 },
];

const menuByPrice = menu.toSorted((firstDrink, secondDrink) => {
  return firstDrink.price - secondDrink.price;
});

console.log(menuByPrice);
// [
//   { name: 'Espresso', price: 45 },
//   { name: 'Cappuccino', price: 60 },
//   { name: 'Latte', price: 75 },
//   { name: 'Mocha', price: 90 }
// ]
*/

//! *** ПРАКТИКА ***
/*
 * Онлайн-бібліотека показує список книг у різному порядку.
 * Масив books містить обʼєкти з властивостями title, author і rating.
 * 1. Оголоси змінну sortedByAscendingRating і поклади в неї копію масиву
 *    books, відсортовану за зростанням рейтингу.
 * 2. Оголоси змінну sortedByDescendingRating і поклади в неї копію масиву
 *    books, відсортовану за спаданням рейтингу.
 * Обидва рази використай метод toSorted() з функцією порівняння.

const books = [
  { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
  { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
  { title: 'The Glass Garden', author: 'Leo', rating: 7.75 },
  { title: 'North of Winter', author: 'Kim', rating: 7.94 },
  { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 },
];

const sortedByAscendingRating = books.toSorted(
  (firstBook, secondBook) => firstBook.rating - secondBook.rating
);

console.log(sortedByAscendingRating);
// [
//   { title: 'The Glass Garden', author: 'Leo', rating: 7.75 },
//   { title: 'North of Winter', author: 'Kim', rating: 7.94 },
//   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
//   { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
//   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 }
// ]

const sortedByDescendingRating = books.toSorted(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);

console.log(sortedByDescendingRating);
// [
//   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 },
//   { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
//   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
//   { title: 'North of Winter', author: 'Kim', rating: 7.94 },
//   { title: 'The Glass Garden', author: 'Leo', rating: 7.75 }
// ]
*/

//! ==== ЦЕПОЧКИ МЕТОДОВ ====
/*
 * Задача: отфильтровать массив и оставить только элементы, которые соответствуют условию filter().
 * Задача: преобразовать каждый элемент полученного массива .map().

const numbers = [5, 12, 8, 20, 3];

const result = numbers
  .filter(number => number > 5) //! оставляет числа > 5
  .map(number => number * 2); //! умножает каждое число на 2

console.log(result); // [24, 16, 40]
*/

//! *** ПРИМЕР ***
/*
const menu = [
  { name: 'Latte', price: 75 },
  { name: 'Espresso', price: 45 },
  { name: 'Mocha', price: 90 },
  { name: 'Cappuccino', price: 60 },
];

// const menuByPrice = menu.toSorted((a, b) => a.price - b.price); //! toSorted вызывает массив, поэтому .map можно вызывать на результате его работы
// const names = menuByPrice.map(item => item.name);

const names = menu.toSorted((a, b) => a.price - b.price).map(item => item.name);

console.log(names);
*/

//! *** ПРАКТИКА ***
/*
 * Онлайн-бібліотека показує назви найкраще оцінених книг.
 * Масив books містить обʼєкти з властивостями title, author і rating.
 * 1. Оголоси змінну topRatedTitles і поклади в неї масив назв книг,
 *    рейтинг яких не менший за minRating.
 * 2. Зроби це одним ланцюжком з методів filter() і map().
 *    Проміжних змінних бути не повинно.

const books = [
  { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
  { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
  { title: 'The Glass Garden', author: 'Leo', rating: 7.75 },
  { title: 'North of Winter', author: 'Kim', rating: 7.94 },
  { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 },
];

const minRating = 8;

const topRatedTitles = books
  .filter(book => book.rating >= minRating)
  .map(book => book.title);

console.log(topRatedTitles);
// ['Silent Harbor', 'Paper Moons', 'Ashes and Salt']
*/

//! *** ПРАКТИКА ***
/*
 * Функція getActiveNamesByBalance(users) повертає масив імен
 * активних користувачів, відсортованих за балансом від найбільшого.
 *   users — масив обʼєктів користувачів.
 * 1. Оголоси getActiveNamesByBalance як стрілочну функцію.
 * 2. Одним ланцюжком: відбери користувачів, у яких isActive дорівнює true,
 *    відсортуй їх за balance від найбільшого до найменшого й дістань їхні імена.
 * 3. Використай методи filter(), toSorted() і map().
 *    Проміжних змінних бути не повинно.

const allUsers = [
  {
    name: 'Alex',
    email: 'alex@indexia.com',
    eyeColor: 'blue',
    friends: ['Sam'],
    isActive: false,
    balance: 2811,
    skills: ['html', 'css'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Nora',
    email: 'nora@tubesys.com',
    eyeColor: 'blue',
    friends: ['Kim', 'Sam'],
    isActive: true,
    balance: 3821,
    skills: ['figma', 'html', 'css', 'testing', 'git'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Max',
    email: 'max@xinware.com',
    eyeColor: 'green',
    friends: ['Leo', 'Iris', 'Kim'],
    isActive: false,
    balance: 3793,
    skills: ['sql', 'node', 'git', 'html', 'javascript'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Iris',
    email: 'iris@omatom.com',
    eyeColor: 'green',
    friends: ['Nora', 'Leo'],
    isActive: true,
    balance: 2278,
    skills: ['react', 'javascript', 'css'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Sam',
    email: 'sam@nurali.com',
    eyeColor: 'blue',
    friends: ['Alex', 'Max'],
    isActive: true,
    balance: 3951,
    skills: ['git', 'node', 'sql'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Leo',
    email: 'leo@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Iris', 'Kim'],
    isActive: false,
    balance: 1498,
    skills: ['testing', 'html', 'figma'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Kim',
    email: 'kim@kog.com',
    eyeColor: 'brown',
    friends: ['Nora', 'Max'],
    isActive: true,
    balance: 2764,
    skills: ['javascript', 'react', 'node'],
    gender: 'female',
    age: 39,
  },
];

const getActiveNamesByBalance = users => {
  console.log(users);

  const activeUsers = users.filter(user => user.isActive);

  const sortedUsers = activeUsers.toSorted(
    (userA, userB) => userB.balance - userA.balance
  );

  const names = sortedUsers.map(user => user.name);
  console.log(names);
};
//! Этот массив можно написать сокращено

// const getActiveNamesByBalance = users => {
//   return users
//     .filter(user => user.isActive)
//     .toSorted((userA, userB) => userB.balance - userA.balance)
//     .map(user => user.name);
// };

console.log(getActiveNamesByBalance(allUsers));
// ['Sam', 'Nora', 'Kim', 'Iris']
*/
