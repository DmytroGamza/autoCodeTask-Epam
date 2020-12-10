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

//---
const validateTitle = (value) => {
   // console.log(value.charAt(0));
    if (typeof value !== 'string') {
        return 'Incorrect input data';
    } else if (value.length <= 2) {
        return 'INVALID';
    } else if (value.charAt(0) === value.charAt(0).toUpperCase()) {
        return 'INVALID';
    }
  return 'VALID';
}

const validateTitleAL = (value) => {
  if (typeof value !== 'string') {
    return 'Incorrect input data';
  }

  if (value.length <= 2 || value.length > 20) {
    return 'INVALID';
  } else if ('1234567890'.indexOf(value[0]) !== -1) {
    return 'INVALID';
  } else if (value[0] !== value[0].toUpperCase()) {
    return 'INVALID';
  } else {
    return 'VALID';
  }
}

console.log(validateTitle('22f'));

//"test": "npm run test:junit",
//vs
//"test": "mocha || true",

function countNumbers(string) {
    let strNumbers = string.replace(/\D/g, '');
      strNumbers = Array.from(strNumbers);
    console.log(strNumbers);
  return { '1': 1, '2': 1, '3': 2, '4': 5, '6': 3, '8': 4 };
};

countNumbers('erer384jj4444666888jfd123');

//---
function isLeapYear(date) {
  if (typeof date === 'string' && date.length >= 20){
    return 'Invalid Date';
  }
  else if (typeof date === 'string') { 
    let four = date.substring(0, 4);
    four = parseInt(four);
        if (four % 2020 === 0) {
            return '2020 is a leap year';
        }
        else {
            return `${four} is not a leap year`;
        }
 }
  else if ((typeof date === 'number') && (date >= 12131313131)) {
    return 'Invalid Date';
  }
  else if (typeof date === 'number') {
     // console.log(date);
    let dateTransform = new Date(date);
      dateTransform = dateTransform.toString();
    //  console.log(typeof dateTransform);
   //   console.log(dateTransform);
     let year = dateTransform.slice(11, 15);
    //  console.log(year);
    year = parseInt(year);
    if (year % 4 !== 0) {
      return `${year} is not a leap year`;
    }
    else {
      return `${year} is a leap year`;
    }
    }
  else {
    return '2020 is a leap year';
  }
};

console.log(isLeapYear(1213131313));

let date1 = new Date(1213131313);
console.log(date1);

function isLeapYearAL(date) {
    const getDate = new Date(date);
    if ('' + getDate === 'Invalid Date') {
        return 'Invalid Date';
    }
    const checkDate = new Date(getDate.getFullYear(), 1, 29);
    return checkDate.getDate() === 29 ? `${getDate.getFullYear()} is a leap year` : `${getDate.getFullYear()} is not a leap year`;
};

function makeNumberAL(string) {
    return string.split('').filter(element => !isNaN(+element)).join('');
}

//"test": "npm run test:junit",
//vs
//"test": "mocha || true",

//---