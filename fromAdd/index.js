const isOfType = (() => {
    const type = Object.create(null);

    type.null = x => x === null;
    type.undefined = x => x === undefined;
    type.nil = x => type.null(x) || type.undefined(x);
    type.string = x => !type.nil(x) && (typeof x === 'string' || x instanceof String);
    type.number = x => !type.nil(x) && ((!isNaN(x) && isFinite(x) &&
        typeof x === 'number') || x instanceof Number);
    // check for boolean or boolean literal type. e.g: true, false, new Boolean()
    type.boolean = x => !type.nil(x) && (typeof x === 'boolean' || x instanceof Boolean);
    // check for array type
    type.array = x => !type.nil(x) && Array.isArray(x);
    //check for Object or Object literal type, e.g: {}, new Object(), Object.create(null)
    type.object = x => ({}).toString.call(x) === '[object Object]';
    //check for provided type instance
    type.type = (x, X) => !type.nil(x) && x instanceof X;
    //check for set type
    type.set = x => type.type(x, Set);
    //check for Map type
    type.map = x => type.type(x, Map);
    //check for date type
    type.date = x => type.type(x, Date);

    return console.log(type);
})();


//GREAT function for checing if EMPTY
function isEmpty(x) {
    if (Array.isArray(x) || typeof x === 'string' || x instanceof String) {
        return x.length === 0;
    }

    if (x instanceof Map || x instanceof Set) {
        return x.size === 0;
    }

    if (({}).toString.call(x) === '[object Object]') {
        return Object.keys(x).length === 0;
    }
    return false;
}

console.log(isEmpty([{}, {}]));

//get any list last item
function lastItem(list) {
    if (Array.isArray(list)) {
        return list.slice(-1)[0];
    }

    if (list instanceof Set) {
        return Array.from(list).slice(-1)[0];
    }

    if (list instanceof Map) {
        return Array.from(list.values()).slice(-1)[0];
    }
}
console.log(lastItem(['Яблоко', 'Банан']));

//random number generator with range
function randomNumber(min = 0, max = 1) {
    if (min >= max) {
        return max;
    }
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(randomNumber(17, 44));

//random id generator
//-create unique id starting from current time in milliseconds
//-incrementing it by 1 everytime requested
const uniqueId = (() => {
    const id = (function* () {
        let mil = new Date().getTime();
        while (true)
            yield mil += 1;
    })();
    return () => id.next().value;
})();
console.log(uniqueId());
//-create unique incrementing id starting from provided value or zero
//-good for temporary things ot things that id resets
const uniqueIncrementingId = ((lastId = 0) => {
    const id = (function* () {
        let numb = lastId;
        while (true)
            yield numb += 1;
    })()
    return (length = 12) => `${id.next().value}`.padStart(length, '0');
})();
console.log(uniqueIncrementingId());
//!!!
//-create unique id from letters and numbers
const uniqueAlphaNumericId = (() => {
    const heyStack = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()';
    const randomInt = () => Math.floor(Math.random() * Math.floor(heyStack.length))
    return (length = 8) => Array.from({ length }, () => heyStack[randomInt()]).join('');

})();
console.log(uniqueAlphaNumericId());
//!!!

//create a range of numbers
function range(maxOrStart, end = null, step = null) {
    if (!end) {
        return Array.from({ length: maxOrStart }, (_, i) => i)
    }
    if (end <= maxOrStart) {
        return [];
    }
    if (step !== null) {
        return Array.from({ length: Math.ceil(((end - maxOrStart) / step)) }, (_, i) =>
            (i * step) + maxOrStart);
    }
    return Array.from({ length: Math.ceil((end - maxOrStart)) }, (_, i) => i + maxOrStart);
} 
console.log(range(12));

//format JSON string and stringify anything
const obj = {
    name: 'John Doe',
    family: [
        { name: 'John Doe'}
    ],
    something: [12, 3, 45],
    method() {
        return 'I am ignored'
    },
    set: new Set([1, 4, 54]),
    map: new Map([[1, 2], [4, 6]]),
    symb: Symbol('test')
}

//const stringify = (() => {
    const replacer = (key, val) => {
        if (typeof val === 'symbol') {
            return val.toString();
        }
        if (val instanceof Set) {
            return Array.from(val);
        }
        if (val instanceof Map) {
            return Array.from(val.entries());
        }
        if (typeof val === 'function') {
            return val.toString();
        }
        return val;
    }
//    return (obj, spaces = 0) => JSON.stringify(obj, replacer, spaces)
//})();
//console.log(stringify());
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, null, 4));
console.log(JSON.stringify(obj, replacer));

//execute promise sequentially
/*
const asyncSequentializer = (() => {
    const toPromise = (x) => {
        if (x instanceof Promise) {
            return x;
        }
        if (typeof x === 'function') {
            return (async () => await x())();
        }
        return Promise.resolve(x)
    }
    //take a list of anything: function, async function, promise
    return (list) => {
        const results = [];
        return list
            .reduce((lastPromise, currentPromise) => {
            return lastPromise.then(res => {
                results.push(res);
                return toPromise(currentPromise);
            });
        }, toPromise(list.shift())).then(res => Promise.resolve([...results, res]));
    }
})();
console.log(asyncSequentializer());
*/

//polling data - when you need to keep checking for data updates
/*
async function poll(fn, validate, interval = 2500) {
    const resolver = async (resolve, reject) => {
        try {       //catch any error thrown by the 'fn' function
            const result = await fn();
            const valid = validate(result);

            if (valid === true) {
                resolve(result);
            } else if (valid === false) {
                setTimeout(resolver, interval, resolve, reject);
            }
        } catch (e) {
            reject(e);
        }
    };
    return new Promise(resolver);
}
console.log(poll());
*/

//wait for all Promise to complete
const prom1 = Promise.reject(12);
const prom2 = Promise.resolve(24);
const prom3 = Promise.resolve(48);
const prom4 = Promise.resolve('error');

Promise.all([prom1, prom2, prom3, prom4])
.then(res => console.log('all',res)).catch(err => console.log('all failed', err))

Promise.allSettled([prom1, prom2, prom3, prom4])
    .then(res => console.log('allSettled', res))
    .catch(err => console.log('allSetted failed', err))

Promise.any([prom1, prom2, prom3, prom4])
    .then(res => console.log('any', res))
    .catch(err => console.log('any failed', err))

Promise.race([prom1, prom2, prom3, prom4])
    .then(res => console.log('race', res))
    .catch(err => console.log('race failed', err))

//swap array values place
const array1 = [12, 24, 48];
const swapOldWay = (arr, i, j) => {
    const arrayCopy = [...arr];
    let temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = temp;
    return arrayCopy;
}
const sawpNewWay = (arr, i, j) => {
    const arrayCopy = [...arr];
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]]
    return arrayCopy;
}
console.log(swapOldWay(array1, 1, 2));
console.log(sawpNewWay(array1, 1, 2));

//conditional object key
let condition = true;
const man = {
    someProperty: 'some value', ...(condition === true ? { newProperty: 'value' } : {})
}
console.log(man);

//use variables as the object key
let property = 'newValidProp';
const man2 = {
    someProperty: 'some value', [`${property}`]: 'value'
}

// check for key in object
const sample = {
    prop: 'value'
}
console.log('prop' in sample);
console.log('toString' in sample);
//-using the 'hasOwnProperty' methods is safer
console.log(sample.hasOwnProperty('prop'));
console.log(sample.hasOwnProperty('toString'));

//remove array duplicates
const numberArrays = [undefined, Infinity, 12, NaN, false, 5, 7, null, 12, false, 5,
    undefined, 89, 9, null, Infinity, 5, NaN];
const objArrays = [{ id: 1 }, { id: 4 }, { id: 1 }, { id: 5 }, { id: 4 }];
console.log(Array.from(new Set(numberArrays)),Array.from(new Set(objArrays)));

const idSet = new Set();
console.log(objArrays.filter(obj => {
    const existingId = idSet.has(obj.id);
    idSet.add(obj.id);
    return !existingId;
})
);

//Do 'break' and 'continue' in Array forEach
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const number of numbers) {
    if (number % 2 === 0) {
        continue;
    }
    if (number > 5) {
        break;
    }
    console.log(number);
}
numbers.some(number => {
    if (number % 2 === 0) {
        return false;
    }
    if (number > 4) {
        return true;
    }
    console.log(number)
});

//destructuring with alias name and default values
function demo1({ dt: data }) {
    console.log(data);
}
function demo2({ dt: { name, id = 10 } }) {
    console.log(name, 10);
}
demo1({
    dt: { name: 'sample', id: 50 },
});
demo2({
    dt: { name: 'sample' },
});

//optional chaining and nullish coalescing
const obj2 = {
    data: {
        container: {
            name: {
                value: 'sample'
            },
            int: {
                value:0
            }
        }
    }
}
console.log(
    obj2.data.container.int.value || 'no int value',
    obj2.data.container.int.value ?? 'no int value'
);
console.log(
    obj2.data.container.name.value,
    (obj2 && obj2.data && obj2.data.wrapper && obj2.data.wrapper.name) || 'no name',
    (obj2?.data?.container?.name) || 'no name'
);

