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