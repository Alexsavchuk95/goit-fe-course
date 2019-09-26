"use strict"
//modul -1 task -1

// const name = 'Генератор защитного поля';
// let price;
// price = 1000;
// price = 2000;

// console.log(price);
// console.log(`"Выбран '${name}', цена за штуку ${price} кредитов"`);


// task -2

// const day = 17;
// const month = 10;
// const year = 2048;

// const date = `${day}/${month}/${year}`;
// const message = `"Доброе утро, cегодня ${date} , за бортом отличная погода!"`
// console.log(date)
// console.log(message);

//task -3 


// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';

// const message = `${name} прибывает на отдых ${date} в ${roomType}`;

// console.log(message);


//task -4


// const correctPassword = 'jqueryismyjam';

// const login = prompt('Введите пароль доступа');

// if (login === null) {
//     alert('Ожидаю ввода пароля');
// } else if (login === correctPassword) {
//     alert('Доступ в секретный бункер разрешен!');
// } else if(login !== correctPassword) {
//     alert('Активирована система защиты!');
// }

// task -5

// const total = 100;
// const ordered = 50;

// const user = prompt("Ваш заказ");

// if(+user > total){
//     alert("На складе недостаточно товаров!");
// }else if(+user === total){
//     alert("Вы забираете весь товар cо склада!");
// }else if(+user <= ordered){
//     alert ("Заказ оформлен, с вами свяжется менеджер");
// }

// console.log(user);

//task -7

// let type;
// const value = Number.parseInt(Math.random() * 100);

// if (value % 2 === 0) {
//     type = "even";
// }else if(value % 2 === 1){
//     type ="odd";
// }

// console.log(value);
// console.log(`${value} is ${type}`);  >= 1 && search >= 5

// test 8

// const user = +prompt("Введите число");

// let hotel;

// switch (user) {
//     case 1:
//         hotel = "Каталог хостелов";
//         break;
//     case 2:
//         hotel = "Каталог бюджетных отелей";
//         break;
//     case 3:
//         hotel = "Каталог отелей ***";
//         break;
//     case 4:
//         hotel = "Каталог отелей ****";
//         break;
//     case 5:
//         hotel = "Каталог лучших отелей";
//         break;
//     default:
//         hotel = 'Hotel';
// }

// console.log(hotel);

// if (user === null) {
//     alert('Очень жаль, приходите еще!');
// } else if (+user < 1 || +user > 5) {
//     alert('Неверный ввод, возможные варианты 1-5!');
// }else if (+user >= 1 || +user <=5){
//     alert(hotel);
// }

// console.log(user);


// test 9

// const country = 'Южная Америка';
// let name;
// let price;

// switch (country) {
//     case 'Китай':
//         price = '100 кредитов';
//         break;
//     case 'Южная Америка':
//         price = '250 кредитов';
//         break;
//     case 'Австралия':
//         price = '170 кредитов';
//         break;
//     case 'Индия':
//         price = '80 кредитов';
//         break;
//     case 'Ямайка':
//         price = '120 крдитов';
//         break;
//     default:
//         name = "В вашей стране доставка не доступна";
// }

// console.log(`"Доставка в ${country} будет стоить ${price}"`);

// test 10


// ---------------------------modul 2------------------------------
//test 1

// const users = ["Mango", "Poly", "Ajax", "Chelsey"];
// users.push ("Jay","Kiwi");
// users.splice(2,0,"Kong");
// // Удалить первый элемент массива
// console.log(users.shift(0)); // ["Poly", "Ajax", "Chelsey"]

// // Удалить последний элемент массива
// console.log(users.pop(1)); // ["Poly", "Ajax"]

// // Добавить в начало массива пользователя "Lux"
// console.log(users.unshift('Lux')); // ["Lux", "Poly", "Ajax"]

// // Добавить в конец массива два пользователя ("Jay" и "Kiwi") за одну операцию
// console.log(users); //  ["Lux", "Poly", "Ajax", "Jay", "Kiwi"]

// // Удалить из массива элемент хранящийся в переменной userToDelete
// const userToDelete = "Ajax";
// console.log(users); //  ["Lux", "Poly", "Jay", "Kiwi"]

// // Добавить в массив пользователя "Kong", перед пользователем хранящейся в переменной userToInsertBefore
// const userToInsertBefore = "Jay";
// console.log(users); //  ["Lux", "Poly", "Kong", "Jay", "Kiwi"]

// test 2 
// const users = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// let i = 1;
// users[1] = "Mango";
// users[2] = "Poly";
// users[3] = "Ajax";
// users[4] = "Lux";
// users[5] = "Jay";
// users[6] = "Kong";

// while (i < users.length) {
//     console.log(i, users[i]);
//     i += 1;
// }

// const numbers = [];
// let num = 0;

// while (num < 10) {
//     numbers.push(num);
//     num += 1;
// }

// console.log("numbers: ", numbers);

//test 3

// В переменной message хранится произвольная строка
// const message = "Proin sociis natoque et magnis parturient montes mus";
// const words = ['Proin', 'sociis', 'natoque', 'et', 'magnis', 'parturient', 'montes', 'mus'];

// let price = 0;

// // Разбить строку в массив, разделитель - пробел, и записать в переменную words
// console.log(words);

// // Выведи в консоли длину массива words
// console.log(words.length); // 8

// // Используя цикл вычисли сколько будет стоить гравировка и запиши результат в переменную price
// while ( price < 80) {
//     words.push(price)
//     price += 10;
// }
// console.log(price); // 80

//test 4


// let input = 0;

// do {
//   input = Number( prompt('Введите число больше 100', '') );
// } while(input <= 100);



// ------------------------------modul 3---------------------------------

// task 1

// const checkNumberType = function (a) {
//     if (a % 2 === 0) {
//         return 'Even';
//     }else if (a % 2 === 1){
//         return 'Odd';
//     }
// };


// console.log(checkNumberType(2)); // 'Even'

// console.log( checkNumberType(46) ); // 'Even'

// console.log( checkNumberType(3) ); // 'Odd'

// console.log( checkNumberType(17) ); //


//test 2 

// const formatString = function(text){
//     if(text.length <= 40){
//         return text;
//     }else if(text.length >= 40){
//         return `${text} ...`;
//     }
// }


// // Вызовы функции для проверки
// console.log(
//     formatString("Curabitur ligula sapien, tincidunt non.")
// ); // вернется оригинальная строка

// console.log(
//     formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
// ); // вернется форматированная строка

// console.log(
//     formatString("Curabitur ligula sapien.")
// ); // вернется оригинальная строка

// console.log(
//     formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
// ); // вернется форматированная строка

//test 3
// const checkForSpam = function (text) {
//     const lowerText = text.toLowerCase();
//     return !!(~lowerText.indexOf('spam') || ~lowerText.indexOf('sale'));
// }
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true


// test 4


/*  
  Напиши фукнцию findLongestWord(str), которая принимает 
  параметром произвольную строку и возвращает самое длинное слово в этой строке.   
  
  Важное условие - в строке могут быть только пробелы, символы букв и цифр!
*/


// Вызовы функции для проверкиQ
// const findLongestWord = function (text){
//     return 
// }

// console.log(
//     findLongestWord("The quick brown fox jumped over the lazy dog")
//   ); // 'jumped'

//   console.log(
//     findLongestWord("Google do a roll")
//   ); // 'Google'

//   console.log(
//     findLongestWord("May the force be with you")
//   ); // 'force'





// -----------------modul 5---------------


//  const numbers = [1, 2, 3];

//  const doubledNumbers = numbers.map(num => num * 2);
//  console.log(doubledNumbers); // [2, 4, 6]


// test 1


/*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. */

/* 
  Функция findGreaterThan принимает два параметра - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*/


// test 2

/*
  Напиши функию getPropValues(arr, prop), принимающую 
  параметры arr - массив, и prop - имя ключа в объекте. 
  
  Функция должна возвращать массив всех значений этого ключа из arr.
  
  PS: обязательно использу перебирающие методы массивов, никаких for!
*/


const guests = [
  { name: "Mango", age: 20, isActive: true },
  { name: "Poly", age: 18, isActive: false },
  { name: "Ajax", age: 30, isActive: true },
  { name: "Chelsey", age: 45, isActive: false }
];

// // const getPropValues = guests.filter(guest => guest.isActive);

// // console.log(getPropValues);


//
const getPropValues = guests => guests.map(el => el.value);

// console.log(getPropValues(guests));

// // console.log(getPropValues);


// Вызовы функции для проверки
console.log(getPropValues(guests, 'name')); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]



// test 3 
/*      
  Напиши функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.
    
  Если значение поля inactiveDays болше чем period, 
  поставить для isActive значение false.
    
  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const guests = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true }
// ];


// // const setGuestState = (guests,period) => guests.filter(el => el.period < period );
// // console.log(setGuestState);

// const setGuestState = guests.filter(guests => guests.inactiveDays > 10 );
// console.log(setGuestState);

// // Вызовы функции для проверки
// console.log(
//   setGuestState(users, 10)
//); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// console.log(
//   setGuestState(users, 20)
// ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// console.log(
//   setGuestState(users, 50)
// ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true



// task 4

/*
  Напиши функию getActiveGuests(guests), принимающую массив объектов гостей. 
  
  Функция должна возвращать массив объектов гостей, значение поля isActive которых true.
         
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];

// const getActiveGuests = (guests) => guests.filter(el => el.isActive === true);


// // Вызовы функции для проверки
// console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax



// test 5

/*      
  Напиши функцию getGuestsOlderThan(guests, age), где 
  guests - массив объектов гостей, age - предел возраста для сортировки. 
  
  Функция возвращает массив объектов значение свойства age которых больше чем параметр age.
  
  PS: обязательно используй перебирающие методы массивов, никаких for!
*/

// const guests = [
//   { name: "Mango", age: 20, isActive: true },
//   { name: "Poly", age: 18, isActive: false },
//   { name: "Ajax", age: 30, isActive: true },
//   { name: "Chelsey", age: 45, isActive: false }
// ];

// const getGuestsOlderThan = (guests,age) => guests.filter(el => el.age > age);

// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

// console.log(getGuestsOlderThan(guests, 55)); // []
