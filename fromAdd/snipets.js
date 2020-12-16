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