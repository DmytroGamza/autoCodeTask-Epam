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
  //  for (let i = 0; i < arr.length; i++)  
    arr.parseInt();
    console.log(arr);
  return arr;
};

console.log(mapArray([2, '5', 8]));