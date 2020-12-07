function convert(arr) {
     let newArr = [];
    for (let i = 0; i < arr.length; i++) {
       // let newArr = [];
        if (typeof arr[i] === 'number') {
            //     let newArr = arr.map(function (e) { return e.toString() });
          //  arr[i] = parseInt(arr[i]);
          //  arr[i].toString();
             newArr.push(arr[i].toString());
        }
        
        else if (typeof arr[i] === 'string') {
          //  arr[i].toString();
          //  arr[i] = parseInt(arr[i]);
             newArr.push(parseInt(arr[i]));
        }
       
    }
    console.log(newArr);
    return newArr;
}

console.log(convert([2, 3, 44, '55', 22]));
let testArray = [];
testArray = convert([2, 3, 44, '55', 22]);
console.log(typeof testArray[3]);

//---
const executeforEach = (arr) => {
 arr.forEach(function (val, idx) {
    arr[idx] = val * 2;
 });
    return arr;
};

console.log(executeforEach([1, 2, 3]));

//---
const mapArray = (arr) => {
    let newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        newArr2.push(parseInt(arr[i]));
    }
    console.log(newArr2);
    newArr2.forEach(function (val, idx) {
        newArr2[idx] = val + 3;
        
 });
  return newArr2;
};

console.log(mapArray([2, '5', 8]));

//---
const filterArray = (arr) => {
  let newArr3 = [];
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0) {
            newArr3.push(arr[i]);
        }
    }
  return newArr3;
};

console.log(filterArray([2, 5, 8]));

//---
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

//---
const makeListFromRange = (arr) => {
    let newArr5 = [];
    console.log(arr[0]);
    console.log(arr[1]);
  for (i = arr[0]; i <= arr[1]; i++) {
    newArr5.push(i);
  }
    return newArr5;
};
 
console.log(makeListFromRange([2, 7]));

//---
const actors = [
  {name: 'tommy', age: 36},
  {name: 'lee', age: 28},
];

const getArrayOfKeys = (object, value) => {
   // let result = objArray.map(a => a.foo);
    var output = [];
    for (var i = 0; i < object.length; i++)
        output.push(object[i][value]);
    return output;
};

console.log(getArrayOfKeys(actors,'age'));

const sumOfAges = actors.reduce((sum, currentValue) => {
    return sum + currentValue.age;
}, 0);

console.log(sumOfAges);

//---
const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
console.log(every_nth([1, 2, 3, 4, 5, 6], 1));

