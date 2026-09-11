'use strict';

//! ====== ОБЪЕКТЫ ======
//! *** Ключ : значение -- все вместе = свойство ***

/*
const user = { //! *** Литерал объекта = запись объекта через {} с его свойствами ключ: значение. ***
  name: 'Alex', //! name → ключ, 'Alex' → значение, name: 'Alex' → свойство
  age: 25, //! age → ключ, 25 → значение, age: 25 → свойство
};
*/
//! ====== ДОСТУП К СВОЙСТВАМ В МЕТОДАХ ======
/*
const user = { //! user - объект
  name: 'Alex',
  age: 25,

  sayHello() { //! sayHello() { ... } — объявление метода внутри объекта;
    console.log(`Hello, ${this.name}!`); //! this.name — обращение метода к свойству name этого объекта.
  },
};
user.sayHello(); //! user.sayHello() — вызов метода;
*/
//! ((((( ПРАКТИКА )))))
/*
 * 1. Оголоси змінну apartment зі значенням-обʼєктом, що описує квартиру:
 *    - imgUrl — рядок '<https://picsum.photos/640/480>'
 *    - descr — рядок 'Spacious apartment in the city center'
 *    - rating — число 4
 *    - price — число 2153
 *    - tags — масив ['premium', 'promoted', 'top']
 * 2. Дістань значення властивостей обʼєкта apartment у змінні через крапку:
 *    - aptDescr — опис
 *    - aptRating — рейтинг
 *    - aptPrice — ціна
 *    - aptTags — теги

const apartment = {
  imgUrl: 'https://picsum.photos/640/480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};
const aptDescr = apartment.descr;
const aptRating = apartment.rating;
const aptPrice = apartment.price;
const aptTags = apartment.tags;

console.log(aptDescr); // Spacious apartment in the city center
console.log(aptRating); // 4
console.log(aptPrice); // 2153
console.log(aptTags); // ['premium', 'promoted', 'top']
*/

//! ====== ВЛОЖЕННЫЕ СВОЙСТВА ======
/*
const book = { //! book - объект
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  publisher: { //! publisher - вложенный объект
    name: 'HarperCollins',
    country: 'UK',
  },
};
console.log(book.publisher.country); //! Можно взять свойство country // UK
console.log(book.genres[1]); //! Обращаться к любому элементу массива // adventure
console.log(book.genres.length); //! Посмотреть длину массива // 2
*/

//! --- ПРАКТИКА ---

/*
 * Обʼєкт apartment описує квартиру: фото, опис, рейтинг, ціна, теги.
 *
 * 1. Додай до обʼєкта apartment властивість owner — вкладений обʼєкт
 *    з даними власника:
 *    - name — 'Henry'
 *    - phone — '982-126-1588'
 *    - email — 'henry.carter@aptmail.com'
 * 2. Виведи в консоль значення через ланцюжок звернень:
 *    - імʼя власника
 *    - телефон власника
 *    - пошта власника
 *    - кількість тегів (довжина масиву tags)
 *    - перший тег
 *    - останній тег

const apartment = {
  imgUrl: '<https://picsum.photos/640/480>',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

console.log(apartment);
console.log(apartment.owner.name);
console.log(apartment.owner.phone);
console.log(apartment.owner.email);
console.log(apartment.tags.length);
console.log(apartment.tags[0]);
console.log(apartment.tags[apartment.tags.length - 1]);
*/

//! ===== ДОСТУП ЧЕРЕЗ [] =====
//! ** ПРАВИЛО **
//! . → имя свойства пишется прямо
//! [] → внутри можно передать выражение, результат которого станет ключом.
/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
  isPublic: true,
};

console.log(book.title); //! Нельзя подставить переменную как имя свойства. title - буквально имя свойства.
console.log(book['title']); //! Можно использовать переменную. title - строковый ключ, который находится в []
*/

//! == ПРАКТИКА № 1 ==
/*
 * Обʼєкт apartment описує квартиру: фото, опис, рейтинг, ціна, теги.
 *
 * Дістань значення властивостей apartment
 * звертаючись через квадратні дужки і виведи у консоль:
 * 1. descr — опис.
 * 2. rating — рейтинг.
 * 3. tags — теги.

const apartment = {
  imgUrl: '<https://picsum.photos/640/480>',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

console.log(apartment['descr']);
console.log(apartment['rating']);
console.log(apartment['tags']);
*/
//! == ПРАКТИКА № 2 ==
/*
const user = {
  name: 'Alex',
  age: 25,
  city: 'Kyiv',
};

const property = 'city';

console.log(user[property]);
*/

//! ======= ИЗМЕНЕНИЕ ЗНАЧЕНИЯ СВОЙСТВ =======
/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
  isPublic: true,
};

console.log(book);

book.rating = 88; //! Можна изменить любое значение в объекте через его свойство
book.isPublic = false; //! -- || -- || -- ||
book.genres.push('thriller'); //! Также, можна заменить значения в массиве, обратившись через ссылку массива

console.log(book);
*/
//! ------ ПРАКТИКА ------
/*
 * Обʼєкт apartment описує квартиру. Онови його властивості:
 * 1. price — постав 5000.
 * 2. rating — постав 4.7.
 * 3. owner.name — постав 'Henry Sibola'.
 * 4. tags — додай у кінець масиву рядок 'trusted'.

const apartment = {
  imgUrl: 'https://picsum.photos/640/480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

console.log(apartment.price); // 5000
console.log(apartment.rating); // 4.7
console.log(apartment.owner.name); // Henry Sibola
console.log(apartment.tags); // ['premium', 'promoted', 'top', 'trusted']
*/

//! ======== ДОБАВЛЕНИЕ СВОЙСТВ ========
/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
  isPublic: true,
};

book.rating = 88; //! Тут изменили значение
book.pageCount = 21; //! Такого свойства pageCount со значением не существовало. Но его добавили
book.price = { //! Добавили свойство price, значением которого является объект с двумя свойствами: hardcover и softcover
  hardcover: 40,
  softcover: 10,
};

console.log(book);
*/

//! ======== КРАТКОЕ ОПИСАНИЕ СВОЙСТВ ========
/*
const title = 'The Last Kingdom';
const author = 'Bernard Cornwell';

const book = {
  title, //! Имя свойства и имя значения дублируются
  author, //! Для таких ситуация используется синтаксис котортких свойств
};

console.log(book);
console.log(book.title);
console.log(book.author);
*/

//! ------ ПРАКТИКА ------
/*
 * Дані одного замовлення Sunny Coffee задані в окремих змінних:
 * напій, розмір, ціна за одиницю та кількість.
 *
 * 1. Оголоси змінну total — загальну суму замовлення (ціна * кількість).
 * 2. Збери обʼєкт order із властивостями drink, size, price, quantity, total.
 *    Значення візьми з однойменних змінних, використавши короткі властивості.

const drink = 'Cappuccino';
const size = 'large';
const price = 95;
const quantity = 2;

const total = price * quantity;

const order = {
  drink,
  size,
  price,
  quantity,
  total,
};

console.log(order); // { drink: 'Cappuccino', size: 'large', price: 95, quantity: 2, total: 190 }
*/

//! ======== ВЫЧИСЛИТЕЛЬНЫЕ СВОЙСТВА ========
/*
const key = 'author';

const book = {
  title: 'The Last Kingdom',
  [key]: 'Bernard Cornwell', //! Значение переменной [key] и используется как имя свойства
};

//book[key] = 'Bernard Cornwell';

console.log(book);
*/

//! ------ ПРАКТИКА ------

/*
 * У картці пацієнта SmileCare за раз оновлюють кілька контактних полів.
 * Які саме поля — задано у змінних firstField і secondField,
 * а нові значення — у firstValue і secondValue.
 *
 * Збери обʼєкт update одним літералом із двома обчислювальними властивостями:
 * 1. Імʼя першої властивості береться зі змінної firstField, значення — firstValue.
 * 2. Імʼя другої властивості береться зі змінної secondField, значення — secondValue.

const firstField = 'phone';
const firstValue = '098-123-4567';
const secondField = 'email';
const secondValue = 'patient@smilecare.com';

const update = {
  [firstField]: firstValue,
  [secondField]: secondValue,
};

console.log(update); // { phone: '098-123-4567', email: 'patient@smilecare.com' }
*/

//! ======== МЕТОД Object.keys() ========
/*
const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  rating: 8.38,
};

console.log(Object.keys(book)); //! Сначала вызываем массив ключей методом Object.keys() 
const keys = Object.keys(book); //! Сохраняем массив ключей в переменную

console.log(keys);

for (const key of keys) { //! Для того чтобы вывести все свойства объекта, можна пройтись по массиву ключей for const key of keys
  console.log(key);
  console.log(book[key]); //! Если нужны значения, используем ключ для обращения к объекту
}
*/
/*
const apartment = {
  rooms: 4,
  floor: 7,
  area: 120,
  hasBalcony: true,
};

const keys = Object.keys(apartment);

for (const key of keys) {
  console.log(key);
  console.log(apartment[key]);
}
*/

//! --- ПРАКТИКА ---
/*
 * Функція getOrderTotal(order) рахує загальну вартість замовлення.
 *   order — обʼєкт, де ключ це назва позиції, а значення — її вартість.
 *
 * 1. Оголоси всередині функції змінну total зі значенням 0.
 * 2. Отримай масив ключів order через Object.keys().
 * 3. Перебери цей масив циклом for...of.
 * 4. Додай вартість кожної позиції до total.
 * 5. Поверни total.

function getOrderTotal(order) {
  let total = 0;
  const keys = Object.keys(order);
  //console.log(keys);

  for (const key of keys) {
    //console.log(key, order[key]);
    total += order[key];
  }
  return total;
}

console.log(getOrderTotal({ espresso: 60, latte: 85, cheesecake: 120 })); // 265
console.log(getOrderTotal({ cappuccino: 75, muffin: 55 })); // 130
console.log(getOrderTotal({ americano: 50 })); // 50
*/

//! --- ЗАДАЧА ---
/*
 * Функція getAffordable(menu, budget) збирає назви напоїв, доступних за бюджет.
 *   menu — обʼєкт, де ключ це назва напою, а значення — його ціна.
 *   budget — скільки грошей є в наявності.
 *
 * 1. Оголоси всередині функції порожній масив affordable.
 * 2. Отримай масив ключів menu через Object.keys().
 * 3. Перебери цей масив циклом for...of.
 * 4. Якщо ціна напою не більша за budget, додай його назву (ключ) у affordable.
 * 5. Поверни affordable.

const coffeeMenu = {
  espresso: 60,
  latte: 85,
  cappuccino: 75,
  mocha: 90,
};

function getAffordable(menu, budget) {
  const affordable = [];
  const keys = Object.keys(menu);

  for (const key of keys) {
    if (menu[key] <= budget) {
      affordable.push(key);
    }
  }
  return affordable;
}

console.log(getAffordable(coffeeMenu, 75)); // ['espresso', 'cappuccino']
console.log(getAffordable(coffeeMenu, 100)); // ['espresso', 'latte', 'cappuccino', 'mocha']
console.log(getAffordable(coffeeMenu, 50)); // []
*/

//! ======== МЕТОД Object.values() ========
//! --- ЗАДАЧА "НАПИТКИ ПО БЮДЖЕТУ" ---
/*
 * Функція getServicesTotal(priceList) рахує загальну вартість усіх послуг у прайсі.
 *   priceList — обʼєкт, де ключ це назва послуги, а значення — її ціна.
 * 1. Отримай масив цін через Object.values() і збережи його у змінну values.
 * 2. Оголоси змінну total зі значенням 0.
 * 3. Перебери values циклом for...of і додай кожну ціну до total.
 * 4. Поверни total.

function getServicesTotal(priceList) {
  let total = 0;
  const keys = Object.keys(priceList);
  const values = Object.values(priceList);

  //console.log(Object.keys(priceList)); //! Возвращает массив ключей
  //console.log(Object.values(priceList)); //! Возвращает массив значений

  for (const value of values) {
    total += value;
  }
  return total;
}

console.log(getServicesTotal({ cleaning: 500 })); // 500
console.log(getServicesTotal({ cleaning: 500, whitening: 1200 })); // 1700
console.log(getServicesTotal({ cleaning: 500, whitening: 1200, filling: 800 })); // 2500
*/

//! --- ЗАДАЧА "РАСХОДЫ НА ЗАРПЛАТУ" ---
/*
 * Функція getTotalSalary(salaries) рахує загальну суму зарплат команди.
 *   salaries — обʼєкт, де ключ це посада, а значення — зарплата.
 * 1. Оголоси змінну total зі значенням 0.
 * 2. Отримай масив зарплат через Object.values() і збережи його у змінну values.
 * 3. Перебери values циклом for...of і додай кожну зарплату до total.
 * 4. Поверни total.

function getTotalSalary(salaries) {
  let total = 0;
  const values = Object.values(salaries);

  for (const value of values) {
    total += value;
  }
  return total;
}

console.log(getTotalSalary({ barista: 100, cashier: 150, manager: 80 })); // 330
console.log(getTotalSalary({ barista: 200, cashier: 50, manager: 150 })); // 400
console.log(getTotalSalary({ barista: 120, manager: 90 })); // 210
*/

//! ======== СОЗДАНИЕ И ОБХОД МАССИВА ОБЪЕКТОВ ========
/*
const books = [
  { //! Объект №1 1-ая итерация
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  { //! Объект №2
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  { //! Объект №3
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    rating: 7.75,
  },
];

for (const book of books) {
  //console.log(book); //! Получаем ссылку на каждый объект итерации (№1, №2, №3)
  console.log(book.rating); //! Обращаемся к свойствам объектов
}
*/

//! --- ПРАКТИКА ---
/*
 * Функція getOrderTotal(order) рахує підсумкову суму замовлення.
 *   order — масив позицій; кожна позиція це обʼєкт із властивостями
 *   name (напій), price (ціна) і quantity (кількість).
 *
 * 1. Оголоси всередині функції змінну total зі значенням 0.
 * 2. Перебери масив order циклом for...of.
 * 3. Для кожної позиції додай до total її вартість — ціну, помножену на кількість.
 * 4. Поверни total.

function getOrderTotal(order) {
  let total = 0;

  for (const item of order) {
  //console.log(item.price * item.quantity);
    total += item.price * item.quantity;
  }
  return total;
}

console.log(
  getOrderTotal([
    { name: 'Espresso', price: 60, quantity: 2 },
    { name: 'Latte', price: 85, quantity: 1 },
    { name: 'Cheesecake', price: 120, quantity: 3 },
  ])
); // 565

console.log(
  getOrderTotal([
    { name: 'Cappuccino', price: 75, quantity: 2 },
    { name: 'Muffin', price: 55, quantity: 1 },
  ])
); // 205

console.log(getOrderTotal([{ name: 'Americano', price: 50, quantity: 1 }])); // 50
*/

//! ======== ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВ ========
/*
const books = [
  { title: 'The Last Kingdom', author: 'Bernard Cornwell' },
  { title: 'Beside Still Waters', author: 'Robert Sheckley' },
  { title: 'Fahrenheit 451', author: 'Ray Bradbury' },
];

const authorToFind = 'Robert Sheckley';

for (const book of books) {
  console.log(book);
  if (book.author === authorToFind) {
    console.log(book.title);
    break;
  }
}

console.log('Done');
*/

//! --- ПРАКТИКА ---
/*
 * Функція findRoom(doctors, target) знаходить кабінет лікаря потрібної спеціальності.
 *   doctors — масив лікарів; кожен лікар це обʼєкт із властивостями
 *   specialty (спеціальність) і room (кабінет).
 *   target — шукана спеціальність.
 *
 * 1. Перебери масив doctors циклом for...of.
 * 2. Якщо specialty лікаря дорівнює target, поверни його room.
 * 3. Якщо жоден лікар не підійшов, поверни null.

const clinicDoctors = [
  { specialty: 'therapist', room: 12 },
  { specialty: 'surgeon', room: 7 },
  { specialty: 'orthodontist', room: 21 },
];

function findRoom(doctors, target) {
  for (const doctor of doctors) {
    if (doctor.specialty === target) {
      return doctor.room;
    }
  }
  return null;
}

console.log(findRoom(clinicDoctors, 'surgeon')); // 7
console.log(findRoom(clinicDoctors, 'therapist')); // 12
console.log(findRoom(clinicDoctors, 'dentist')); // null
*/
