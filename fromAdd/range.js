function range1(start, end) {
    let ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
console.log(range1(12, 14));

function range2(start, end) {
    if (start === end) return [start];
    return [start, ...range2(start + 1, end)];
}
console.log(range2(11, 15));

function range3(start, end) {
    return (new Array(end - start + 1)).fill(undefined).map((_, i) => i + start);
}
console.log(range3(8, 14));

const cars = [{
make: "audi",
model: "r8",
year: "2012"
},
{
make: "audi",
model: "rs5",
year: "2013"
},
{
make: "ford",
model: "mustang",
year: "2012"
},
{
make: "ford",
model: "fusion",
year: "2015"
},
{
make: "kia",
model: "optima",
year: "2012"
    }];

let group = cars.reduce((r, a) => {
    console.log('a', a);
    console.log('r', r);
    r[a.make] = [...r[a.make] || [], a];
    return r;
}, {});
console.log('group', group);

objArray = [{ foo: 1, bar: 2 }, { foo: 3, bar: 4 }, { foo: 5, bar: 6 }];

function getFields(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

var result6 = getFields(objArray, "foo"); // returns [ 1, 3, 5 ]
console.log(result6);
console.log(getFields(cars, "model"));