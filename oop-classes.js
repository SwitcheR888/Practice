'use strict';
//! ===== КЛЮЧЕВОЕ СЛОВО this =====
/*
const user = {
  name: 'Кирилл', //! user.name - св-во объекта. Получаем: Кирилл

  greet() {     //! greet - метод объекта
    console.log(this.name); //! this.name означает: «Возьми свойство name у объекта greet
  },
};

user.greet(); //! вызываем метод объекта
*/
/*
function greet(name) {
  console.log(name);
}

greet('Кирилл');
*/

//! ===== ГЛОБАЛЬНЫЙ КОНТЕКСТ с this =====
/*
function greet() {
  console.log(this);
}

greet(); // undefined
*/
/*
const car = {
  brand: 'Toyota',

  showBrand() {
    console.log(this.brand);
  },
};

car.showBrand(); // Toyota
//! car.showBrand() - это вызов.
//! Поэтому (this → car) // this.brand → car.brand → "Toyota"
*/

//! Теперь та же функция, но вне объекта:
/*
function showBrand() {
  console.log(this);
}

showBrand();
//! Здесь нет: car.showBrand(). Есть просто: showBrand(). Поэтому функция не получает car как контекст через вызов.
*/

//! ===== КОНТЕКСТ В => ФУНКЦИЯХ =====
/*
const clinic = {
  city: 'Kyiv',

  getCity: () => {
    return this.city;
  },
};

console.log(clinic.getCity()); // undefined
*/
//! Стрелка смотрит не на объект, внутри которого она записана, а на внешний контекст, где она была создана.
//! У getCity собственного this нет. Поэтому: clinic.getCity() не заставляет стрелку сделать: this → clinic.

//! *** ПРИМЕР ***
/*
const clinic = {
  city: 'Kyiv',
  getCity: () => { //! getCity — стрелочная функция, поэтому clinic.getCity() не привязывает this к clinic.
    return this.city;
  },
};

console.log(clinic.getCity()); // undefined
*/

//! ===== ПРОТОТИП ОБЪЕКТА =====
/*
const drinks = ['Latte', 'Espresso'];

drinks.push('Cappuccino');

console.log(drinks); // ['Latte', 'Espresso', 'Cappuccino']
*/
//! *** ПРИМЕР ***
/*
const drinks = ['Latte', 'Espresso'];
console.log(drinks);

console.log(drinks.length); // 2
console.log(drinks.venue); // undefined //! Интерпретатор нигде не нашел venue и вернул значение "отсутствует"

drinks.sortByPrice(); // TypeError //! Метода sortByPrice() не существует не в прототипе, не в массиве.
*/

//! ===== ООП / OOP =====

//! *** ПРИМЕР: ПРОЦЕДУРНЫЙ СТИЛЬ ***
//! --- Данные находятся отдельно, функция находится отдельно, а связь между ними создаётся при вызове функции через аргументы ---
/*
const servicePrice = 400; //! Данные
const visitsCount = 3;

function getTotal(price, count) { //! Функция не знает про servicePrice и visitsCount.
 (getTotal(servicePrice, visitsCount)); //! Мы передаём ей эти данные аргументами servicePrice, visitsCount

  return price * count;
}

console.log(getTotal(servicePrice, visitsCount)); // 1200
*/
//! *** ПРИМЕР: ОБЪЕКТНО-ОРИЕНТИРОВАННЫЙ СТИЛЬ ***
/*
const treatment = { //! Данные и поведение объединены в одной сущности. И метод сам обращается к данным объекта: this.servicePrice, this.visitsCount
  servicePrice: 400,
  visitsCount: 3,

  getTotal() {
    return this.servicePrice * this.visitsCount;
  },
};

console.log(treatment.getTotal());
*/

//! ===== ОПЕРАТОР new и КЛАССЫ =====
//! имена классов пишутся с большой буквы (PascalCase). Это позволяет визуально отличать класс от обычной переменной.

/*class Treatment {} // тело класса

const treatmentA = new Treatment(); //! экземпляр класса создается при вызове класса с оператором new
const treatmentB = new Treatment();

console.log(treatmentA);
console.log(treatmentB);

console.log(treatmentA === treatmentB); //! false (это 2 разных объекта)
//! Класс — это описание, а new позволяет создать по этому описанию конкретный объект (экземпляр)
*/

//! *** ПРАКТИКА ***
/*
class Book {} //! Book — класс, описание.

const book1 = new Book(); //! book1 — переменная, в которой хранится 1й экземпляр класса Book. new Book() — создаёт новый экземпляр класса.
const book2 = new Book(); //! book2 — переменная, в которой хранится 2й экземпляр класса Book. new Book() — создаёт новый экземпляр класса.
*/
//! book1 и book2 — два разных объекта, хотя созданы по одному классу.
