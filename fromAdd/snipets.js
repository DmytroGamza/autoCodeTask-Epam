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