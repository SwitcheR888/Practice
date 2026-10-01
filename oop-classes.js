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

//! *** ПРАКТИКА 2 ***
/*
 * У SmileCare кожен пацієнт — окремий обʼєкт.
 * Поки що опишемо саму сутність, без даних.
 *
 * 1. Оголоси клас Patient з порожнім тілом.
 * 2. Створи два його екземпляри: firstPatient і secondPatient.
 * 3. Виведи обидва екземпляри в консоль.
 * 4. Виведи в консоль результат порівняння firstPatient === secondPatient.

class Patient {}

const firstPatient = new Patient();
const secondPatient = new Patient();

console.log(firstPatient, secondPatient);

console.log(firstPatient === secondPatient);
*/

//! ===== КОНСТРУКТОР КЛАССА =====
/*
class Book { //! Создаем новый тип объектов Book. Внутри {} находится описание того, какими будут объекты, созданные из этого класса
  constructor(title, author) { //! constructor — это специальный метод класса, который вызывается при создании нового объекта через new.
    this.title = title;
    this.author = author;
  } //! title и author — это параметры.
}

const book1 = new Book('Точка Обмана', 'Дэн Браун'); //! Создаём новый объект Book и запускаем его constructor с этими значениями
const book2 = new Book('Парься меньше, живи больше', 'Гэри Бишоп');
const book3 = new Book('Империя Ангелов', 'Бернар Вербер'); //! Во время создания book1: this.title = title; превращается по смыслу в: book1.title = 'Точка Обмана';
const book4 = new Book('Парься меньше, живи больше', 'Гэри Бишоп'); //! book2 и book4 одинаковые данные, но это разные объекты

console.log(book1); // Book {title: 'Точка Обмана', author: 'Дэн Браун'}
console.log(book2); // Book {title: 'Парься меньше, живи больше', author: 'Гэри Бишоп'}
console.log(book3); // Book {title: 'Империя Ангелов', author: 'Бернар Вербер'}
console.log(book4); // Book {title: 'Парься меньше, живи больше', author: 'Гэри Бишоп'}
*/

//! *** ПРИМЕР ***
/*
 * Клас Patient з минулого уроку створює порожні обʼєкти. Дамо їм дані.
 *
 * 1. Додай у клас конструктор з двома параметрами: name і visitsCount.
 * 2. У конструкторі запиши обидва значення у властивості нового екземпляра.
 * 3. Онови створення пацієнтів: firstPatient — 'Alex' з 2 візитами,
 *    secondPatient — 'Nora' з 5 візитами.

class Patient {
  constructor(name, visitsCount) {
    this.name = name;
    this.visitsCount = visitsCount;
  }
}

const firstPatient = new Patient('Alex', 2);
const secondPatient = new Patient('Nora', 5);

console.log(firstPatient);
console.log(secondPatient);
*/

//! ===== ПАРАМЕТРЫ ОБЪЕКТА =====
/*
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

const book1 = new Book('Точка Обмана', 'Дэн Браун', 2001);
const book2 = new Book('Парься меньше, живи больше', 'Гэри Бишоп', 2016);
const book3 = new Book('Империя Ангелов', 'Бернар Вербер', 2000);
const book4 = new Book('Гэри Бишоп', 2016, 'Парься меньше, живи больше'); //! Ошибка в последовательности параметров. Которую интерпретатор не выдаст за ошибку

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
*/

//! Чтобы избежать ошибок в значениях (отдельными аргументами), можно передать один объект со свойствами
/*
class Book {
  constructor(params) { //! *1 переменная params указывает именно на этот объект.
    this.title = params.title; //! Возьми свойство title из объекта params и запиши его в свойство title создаваемого объекта.
    this.author = params.author;
    this.year = params.year;
  }
}

const book1 = new Book({ //! Конструктор получает один аргумент — объект *1
  title: 'Точка Обмана',
  author: 'Дэн Браун',
  year: 2001,
});

const book2 = new Book({
  author: 'Гэри Бишоп',
  year: 2016,
  title: 'Парься меньше, живи больше',
}); //! Здесь порядок отличается от порядка свойств в constructor. JavaScript смотрит на имя свойства, а не значения! Поэтому он найдёт нужное значение независимо от порядка.
 
console.log(book1); // Book {title: 'Точка Обмана', author: 'Дэн Браун', year: 2001}
console.log(book2); // Book {title: 'Парься меньше, живи больше', author: 'Гэри Бишоп', year: 2016}
*/

//! *** ПРАКТИКА ***
/*
 * Пацієнту потрібна ще й вартість лікування. Трьох аргументів поспіль
 * уже забагато: у виклику не видно, що є що, і переплутати їх легко.
 *
 * 1. Переведи конструктор на один параметр params.
 * 2. Онови створення пацієнтів — передай у виклик обʼєкт параметрів:
 *    firstPatient — patient 'Alex', visits 2, cost 4000;
 *    secondPatient — patient 'Nora', visits 5, cost 6000.
 * 3. У конструкторі запиши значення з params у три властивості екземпляра:
 *    params.patient → this.name,
 *    params.visits → this.visitsCount,
 *    params.cost → this.treatmentCost.
 * 4. Виведи обидвох пацієнтів в консоль.

class Patient {
  constructor(params) {
    ((this.name = params.patient),
      (this.visitsCount = params.visits),
      (this.treatmentCost = params.cost));
  }
}

const firstPatient = new Patient({
  patient: 'Alex',
  visits: 2,
  cost: 4000,
});

const secondPatient = new Patient({
  patient: 'Nora',
  visits: 5,
  cost: 6000,
});

console.log(firstPatient);
console.log(secondPatient);
*/

//! ===== МЕТОДЫ КЛАССА =====
/*
class Book {
  constructor(params) { //! берёт значение title из объекта params и записывает его в свойство title создаваемого объекта.
    this.title = params.title;
    this.author = params.author;
    this.year = params.year;
  }

  getInfo() { //! getInfo() — без параметров.
    return `${this.title} - ${this.author}, year ${this.year}`; //! Он возвращает строку собранную из свойств текущего экземпляра. И подставляет значения.
  }

  changeYear(newYear) { //! метод changeYear(newYear) принимает параметр — новое значение года. Но не возвращает значение — он изменяет состояние объекта
    this.year = newYear;
  }
}

const book1 = new Book({ //! через new Book({...}) передаём объект с нужными полями, а конструктор распаковывает их и сохраняет в this
  title: 'Точка Обмана',
  author: 'Дэн Браун',
  year: 2001,
});

console.log(book1); //! показывает сам объект целиком (все его свойства).

console.log(book1.getInfo()); //! показывает результат вызова метода getInfo() — строку с информацией о книге.

book1.changeYear(2003); //! После changeYear(2003) год у объекта меняется, и второй

console.log(book1.getInfo()); //! нужен, чтобы увидеть, что значение действительно изменилось.
*/

//! *** ПРАКТИКА ***
/*
 * Пацієнт поки що тільки зберігає дані. Навчимо його діям.
 *
 * 1. Додай метод getInfo(), який повертає рядок у форматі
 *    "імʼя: N visits, M UAH" — наприклад "Alex: 2 visits, 4000 UAH".
 * 2. Додай метод addVisit(cost), який збільшує кількість візитів на 1
 *    і додає cost до вартості лікування.
 * 3. Замість виведення самих пацієнтів виведи getInfo() кожного.
 * 4. Додай firstPatient візит вартістю 1500 і знову виведи його getInfo().

class Patient {
  constructor(params) {
    this.name = params.patient;
    this.visitsCount = params.visits;
    this.treatmentCost = params.cost;
  }
  getInfo() {
    return `${this.name}: ${this.visitsCount} visits, ${this.treatmentCost} UAH`;
  }
  addVisit(cost) {
    this.visitsCount += 1;
    this.treatmentCost += cost;
  }
}

const firstPatient = new Patient({
  patient: 'Alex',
  visits: 2,
  cost: 4000,
});

const secondPatient = new Patient({
  patient: 'Nora',
  visits: 5,
  cost: 6000,
});

console.log(firstPatient.getInfo());

console.log(secondPatient.getInfo());

firstPatient.addVisit(1500);
console.log(firstPatient.getInfo());
*/

//! ===== ПРОТОТИП ЭКЗЕМПЛЯРА =====
/*
class Book {
  constructor(params) { //! особая функция, вызывается каждый раз при создании нового экземпляра через new Book(...).
    this.title = params.title;
    this.author = params.author;
    this.year = params.year;
  } //! Конструктор создаёт личные данные (title, author, year) внутри самого экземпляра.

  getInfo() {
    return `${this.title} — ${this.author}, year ${this.year}`;
  }

  changeYear(newYear) {
    this.year = newYear;
  } //! getInfo() и changeYear() - не копируются в каждый созданный объект. Они находятся в Book.prototype
}

const book1 = new Book({ //! Создаётся новый пустой объект. Вызывается constructor, который записывает title, author, year прямо в book1.
  title: 'Точка Обмана',
  author: 'Дэн Браун',
  year: 2001,
});

console.log(book1); // Book { title: 'Точка Обмана', author: 'Дэн Браун', year: 2001 } //! Выводит только то, что лежит непосредственно в book1 — title, author, year.
{//! Методы не показываются, потому что они не внутри book1, а в Book.prototype.}
console.log(book1.hasOwnProperty('getInfo')); // false //! возвращает false, потому что getInfo() не является собственным свойством экземпляра book1.
{//! JS ищет getInfo сначала в book1 → не находит → поднимается по [[Prototype]] → находит в Book.prototype → вызывает его, подставляя this = book1.}
*/

//! ===== ЧАСТНЫЕ СВОЙСТВА =====
