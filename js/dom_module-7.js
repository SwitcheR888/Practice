'use strict';

//! ===== DOM Document Object Model (объектная модель документа) =====
//@ DOM — это способ, с помощью которого JavaScript получает доступ к содержимому HTML-страницы и может работать с ним.

//! ===== ПОИСК ЭЛЕМЕНТОВ =====
//! ===== МЕТОД querySelector() =====
//@ querySelector() — метод, который позволяет найти первый HTML-элемент, соответствующий указанному CSS-селектору

/*
const title = document.querySelector('h1'); //& ищет ПЕРВЫЙ ЭЛЕМЕНТ <h1> на странице
console.log(title); //& <h1 class="title">Popular Authors</h1>

const list = document.querySelector('.names'); //& ищет ПЕРВЫЙ ЭЛЕМЕНТ с классом .name на странице
console.log(list); //& <ul class="names">...</ul>

const listItem = document.querySelector('.item'); //& ищет ПЕРВЫЙ ЭЛЕМЕНТ с классом .item на странице
console.log(listItem); //& <li class="item">Ден Браун</li>

const none = document.querySelector('.page'); //& ищет ПЕРВЫЙ ЭЛЕМЕНТ с классом .page на странице
console.log(none); //& null (такого элемента нет на странице)
*/

//! ===== ПОИСК ЭЛЕМЕНТОВ. МЕТОД querySelectorALL() =====
//@ querySelectorAll() — метод, который находит все HTML-элементы, соответствующие указанному CSS-селектору
/*
const listItems = document.querySelectorAll('.item'); //& ищет ВСЕ ЭЛЕМЕНТЫ с классом .item на странице
console.log(listItems); //& NodeList(5) [li.item, li.item, li.item, li.item, li.item] (коллекция из 5 элементов)
*/
//@ querySelectorAll() возвращает коллекцию всех найденных элементов. Эта коллекция называется NodeList.

//! *** ПРАКТИКА ***

/*
 * На сторінці BookGenres є заголовок і список послуг клініки.
 * 1. Знайди заголовок за класом .heading і виведи його в консоль.
 * 2. Знайди всі послуги за класом .genre і виведи колекцію в консоль.
 * 3. Виведи в консоль кількість послуг.

const heading = document.querySelector('.heading');
console.log(heading);

const genres = document.querySelectorAll('.genre');
console.log(genres);

console.log(genres.length);
*/

//! ===== ГОТОВНОСТЬ DOM =====
//@ *** ПРИМЕР с <script> внутри <head> ***
/*
<head>
  <script src="test.js"></script> //! Браузер встречает <script> внутри <head>
</head> //! Выполняет JavaScript до того, как разобрал <body>
<body>
  <h1 class="heading">BookGenres</h1>
</body>

'use strict';

const heading = document.querySelector('.heading');
console.log(heading); // null //! возвращает null, потому что заголовка ещё нет в DOM.
*/

//@ *** ПРИМЕР с <script> внутри <body> ***
/*
<head>
.......
</head> //! Браузер последовательно разбирает HTML и создаёт DOM-элементы.
<body>
  <h1 class="heading">BookGenres</h1>
    <script src="test.js"></script> //! Когда он доходит до <script src="test.js"></script>, элемент <h1 class="heading"> уже создан в DOM, поскольку расположен выше скрипта.
</body>

'use strict';

const heading = document.querySelector('.heading'); //! document.querySelector('.heading') ищет первый элемент с классом heading
console.log(heading); //! Такой элемент уже существует в DOM, поэтому метод возвращает его. И console.log(heading) выводит <h1 class="heading">BookGenres</h1>
*/
//todo *** ВАЖНО ПОМНИТЬ ***
/*
 * При размещении обычного <script> перед закрывающим </body>
 * браузер сначала разбирает расположенную выше HTML-разметку и создаёт соответствующие узлы DOM.
 * Затем выполняет JavaScript, который может обращаться к уже созданным элементам.
 */

//! ===== СВОЙСТВА И АТРИБУТЫ =====
/*
const roomJs = document.querySelector('.roomJs');
console.log(roomJs); //! Ссылка на DOM элемент <img class="roomJs" src="./rsc/night-js.png"...
console.log(roomJs.src); //! Текущий путь к изображению: http://127.0.0.1:5500/rsc/night-js.png
console.log(roomJs.src, roomJs.alt); //! Текущее значение атрибута alt: http://127.0.0.1:5500/rsc/night-js.png JavaScript Evening Workshop
*/
/*
const room = document.querySelector('.room-js');
console.log(room.src); //! http://127.0.0.1:5500/rsc/night-js.png
console.log(room.alt); //! JavaScript Evening Workshop

roomJs.src =
  'https://i.pinimg.com/736x/30/26/43/302643c0f251db4db8fa0c7f2de8fe54.jpg'; //! Таким образом, можно изменить изображение на странице, присвоив новое значение свойству src.
roomJs.alt = 'JavaScript cheat sheet'; //! Можно изменить текстовое описание изображения на странице, присвоив новое значение свойству alt.

console.log(roomJs.src, roomJs.alt); //! В консоли будет выводиться старый путь и описание изображения, а также новый путь и описание.
*/

//! *** ПРАКТИКА ***
