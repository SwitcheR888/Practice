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

const drinks = ['Latte', 'Espresso'];

drinks.push('Cappuccino');

console.log(drinks); // ['Latte', 'Espresso', 'Cappuccino']
