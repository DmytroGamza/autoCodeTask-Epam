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

const cars2 = [
    {
    'color': "purple",
    'type': 'minivan',
    'registration': new Date('2012-02-03'),
    'capacity':7
},
     {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
    }
];
console.log(cars2);

let carN = {
    'color': "red",
    'type': 'cabrio',
    'registration': new Date('2016-03-02'),
    'capacity':2
}
cars2.unshift(carN);
console.log(cars2);
cars2.push(carN);
console.log(cars2);
cars2.splice(2, 0, carN);
console.log(cars2);
//find
let carF = cars2.find(car => car.color === 'red');
console.log(carF);
let carF2;
console.log(carF2 = cars2.find(car => car.color === 'red' && car.type === 'station wagon'));
//filter
let redCars = cars2.filter(car => car.color === 'red');
console.log(redCars);
//map
let sizes = cars2.map(car => {
    if (car.capacity <= 3) {
        return 'small';
    }
    if (car.capacity <= 5) {
        return 'medium';
    }
    return 'large';
});
console.log(sizes);

//creating newObject witn map()
let carsProperties = cars2.map(car => {
    let properties = {
        'capacity': car.capacity,
        'size': 'large'
    };
    if (car.capacity <= 5) {
        properties['size'] = 'medium';
    }
    if (car.capacity <= 3) {
        properties['size'] = 'small';
    }
    return properties;
});
console.log(carsProperties);

//forEach()
cars2.forEach(car => {
    car['size'] = 'large';
    if (car.capacity <= 5) {
        car['size'] = 'medium';
    }
    if (car.capacity <= 3) {
        car['size'] = 'small';
    }
});
console.log(cars2);

//sort()
let sortedCars = cars2.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0);
console.log(sortedCars);

//every() and some()
cars2.some(car => car.color === 'red' && car.type === 'cabrio')
cars2.every(car => car.capacity >= 4);