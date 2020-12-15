//--Go Make Things
//https://gomakethings.com/converting-strings-to-numbers-with-vanilla-javascript/

let num1 = 42, num2 = '42';
if (num1 === num2) {
    console.log(true);
} else {
    console.log(false);
}

let text = '44px';
let integer = parseInt(text, 10);
console.log(integer);

let text2 = '3.14domeSome';
let pointNum = parseFloat(text2);
console.log(pointNum);

//Number is great way to check for valid data

function numberCheck(str) {
    let checker = Number.isNaN(str);
  //  console.log(typeof checker, checker);
   // let checker2 = checker.isNaN();
    if (isNaN(str)) {
        return 'Unvalid income';
    } else {
        return checker;
    }
}

console.log(numberCheck('314dsd'));

//text-for-roles
const arr = textLines.split('\n');
    let result = '';

    roles.forEach(role => {
        let temp = `\n${role}: \n`;

        arr.forEach((line, j) => {
            if(line.indexOf(role >= 0 ) && line.indexOf(role >= 0) < role.length) {
                const filling = line.slice(role.length + 1);
                temp += `${j + 1}) ${strContent}\n`;
            }
        });
        result += temp;
    });