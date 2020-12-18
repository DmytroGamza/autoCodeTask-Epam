let arrayToWork = [1.4, 4.5, 9.8];

Array.min = function (array) {
    return Math.min.apply(Math, array);
}

let minimum = Array.min(arrayToWork);
console.log(minimum);

const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
const min = Math.min(...arr);
console.log(min);

//Math.min();
console.log(Math.min(3, 5, 1, 0));
console.log(Math.min(-4, -8, 2));
const array1 = [2, 4, 7, -2];
console.log(Math.min(...array1));
let x = 3, y = -2;
let z = Math.min(x, y);
console.log(z);
//const x1 = Math.min(f(foo), boundary);

//functions
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);
let myArray = ['I', 'love', 'chocolate', 'frogs'];
let madeAString = myArray.join(' ');
console.log(madeAString);
let myNumber = Math.random();
console.log(myNumber);

function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}//draw();

function random(number) {
    return Math.floor(Math.random() * number);
}
console.log(random(17));

const myButton = document.querySelector('button');
myButton.onclick = function() {
  alert('hello');
}

//Leap Year
function checkLeapYear(year) {
    if ((0 === year % 4) && (year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}

//checkLeapYear(year);

function checkLeapYear2(year) {
    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}
const year = 2021;//prompt('Enter a year:');
checkLeapYear2(year);

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('demo').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', 'https://youtu.be/gvicrj31JOM', true);
    xhttp.send();
}

let sunny = 'Hiya how are you'.substring(0, 8);
console.log(sunny);

let sunny2 = '1234567890987654321';
let sunnyCut = sunny2.substr(-8);
document.write(sunnyCut);

//make a property read-only
const movieTicket = {
    movie: 'Mad Max',
    hall: 1
};
Object.defineProperty(movieTicket, 'movie', { value: 'Mad Max', writable: false });
movieTicket.movie = 'Star Wars';
console.log(movieTicket);

//parseInt()
function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value)
  } else {
    return NaN
  }
}

console.log(filterInt('-21'));

//substring();
var anyString = 'Mozilla';
// Отобразит 'Moz'
console.log(anyString.substring(0, 3));
console.log(anyString.substring(2, 5));
var anyString2 = 'Mozilla';
var anyString4 = anyString.substring(anyString2.length - 4);
console.log(anyString4);
//
function replaceString(oldS, newS, fillS) {
    return fillS.split(oldS).join(newS);
}
console.log(replaceString('world', 'net', 'New amazing world'));

//converting miliseconds in Date
var d = new Date(1469433907836);

console.log(d.toLocaleString()); // expected output: "7/25/2016, 1:35:07 PM"
console.log(d.toLocaleDateString()); // expected output: "7/25/2016"
d.toDateString();  // expected output: "Mon Jul 25 2016"
d.toTimeString(); // expected output: "13:35:07 GMT+0530 (India Standard Time)"
d.toLocaleTimeString();

const event = new Date('August 19, 1975 23:15:30');
console.log(event.toString());
const w = new Date();
console.log(w.toString());

/*
critical rendering path
різниця між блочник і інлайн
позиш релатів і абсолют, як працюють https://www.youtube.com/watch?v=t0_cw4iyzv0
Всплитие
const let при всплитие
контекст з 2 обєктами, що як виведе і виклик метод в іншому контексті(тобто було 2 обєкти і викликати)
замикание і написати якесь
стрілочні функції
реалізувати метод, який змінює в строці всі 1 букви
event loop і як він працює
проміси і еснк евейт і різниця яка між ними
потім 2-3 питання англ
*/
/*
-шо нового в хтмл 5 і взагалі по хтмл питання -screen
-селектори і їх пріоритет https://www.youtube.com/watch?v=v3LnylaZxHY
-типи даних https://www.youtube.com/watch?v=g7jDucodUzQ
-іветни https://www.youtube.com/watch?v=e57ReoUn6kM
-методи масивів https://learn.javascript.ru/array-methods
-замикання https://www.youtube.com/watch?v=lXE7N5afUtk
-шо нового в ес6 https://www.youtube.com/watch?v=Mq0OOlkCkA8
-проміси https://www.youtube.com/watch?v=1idOY3C1gYU
-call apply bind https://www.youtube.com/watch?v=OaR9Go75hOY
-кол стек https://www.youtube.com/watch?v=o2qIoO8T6Oo
-про хобі на інгліш)
=----===---==-=-
Поліфіл - спец код  у веб - програмуванні це код, який реалізує
деякий функціонал, що не підтримується у якихось версіях веб -
    браузерів за умовчанням.
     */

function hello() {
    console.log('hello', this);
}

//https://olx.ua.dostavka24.asia/delivery.php?pay=3&q=653151497
