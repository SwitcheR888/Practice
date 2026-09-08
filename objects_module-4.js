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
