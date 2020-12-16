let arrayToWork = [1.4, 4.5, 9.8];

Array.min = function (array) {
    return Math.min.apply(Math, array);
}

let minimum = Array.min(arrayToWork);
console.log(minimum);

const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
const min = Math.min(...arr);
console.log(min);
