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
 */

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
