//Example 1: Anonymous closure
let global = 'Hello, I am a global variable :)';

(function () {
    let myGrades = [93, 95, 88, 0, 55, 91];
    const average = function () {
        let total = myGrades.reduce(function (accumulator, item) {
            return accumulator + item
        }, 0);
        return 'Your average grade is ' + total / myGrades.length + '.';
    }
    const failing = function () {
        let failingGrades = myGrades.filter(function (item) {
            return item < 70;
        });
        return 'You failed ' + failingGrades.length + ' times.';
    }
    console.log(average());
    console.log(failing());
    console.log(global);
}());

//Example 2: Global import
/*
(function (globalVariable) {
    let privateFunction = function () {
        console.log(`Shhhh, this is private!`);
    }
    globalVariable.each = function (collection, iterator) {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                iterator(collection[i], i, collection);
            }
        } else {
            for (var key in collection) {
                iterator(collection[key], key, collection);
            }
        }
    };

    globalVariable.filter = function (collection, test) {
        var filtered = [];
        globalVariable.each(collection, function (item) {
            if (test(item)) {
                filtered.push(item);
            }
        });
        return filtered;
    };
    
    globalVariable.map = function (collection, iterator) {
        var mapped = [];
        globalUtils.each(collection, function (value, key, collection) {
            mapped.push(iterator(value));
        });
        return mapped;
    };
    
    globalVariable.reduce = function (collection, iterator, accumulator) {
        var startingValueMissing = accumulator === undefined;
        
        globalVariable.each(collection, function (item) {
            if (startingValueMissing) {
                accumulator = item;
                startingValueMissing = false;
            } else {
                accumulator = iterator(accumulator, item);
            }
        });

        return accumulator;

    };
}(globalVariable));
*/

//Object interface
const myGradesCalculate = (function () {
    let myGrades = [93, 95, 88, 0, 55, 91];
    return {
        average: function () {
            let total = myGrades.reduce(function (accumulator, item) {
                return accumulator + item;
            }, 0);
            return `Your average grade is ${total / myGrades.length} .`;
        },
        failing: function () {
            let failingGrades = myGrades.filter(function (item) {
                return item < 70;
            });
            return `You failed ${failingGrades.length} times.`;
        }
    }
})();

console.log(myGradesCalculate.failing());
console.log(myGradesCalculate.average());

//CommonJS
function myModule() {
    this.hello = function () {
        return `Hello!`;
    }
    this.goodbye = function () {
        return 'goodbye!';
    }
}
//module.exports = myModule;
//var myModule = require('myModule');

var myModuleInstance = new myModule();
console.log(myModuleInstance.hello()); // 'hello!'
myModuleInstance.goodbye(); // 'goodbye!