function curry(func) {

    return function curried(...args) {
        console.log('args: ', args);
        console.log('func: ', func);
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...args2) {
                console.log('args2: ', args2);
                return curried.apply(this, args.concat(args2));
            }
        }
    };

};

function sum(a, b, c) {
    return a + b + c;
};

function times(a, b, c) {
    return a * b * c;
};

function divide(a, b, c) {
    return a / b / c;
};

function minus(a, b, c) {
    return a - b - c;
};

let curriedSum = curry(sum, times, divide, minus);

console.log('hasil -> ', curriedSum(1, 2, 3)); // 6, still callable normally
console.log('hasil -> ', curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log('hasil -> ', curriedSum(1)(2)(3)); // 6, full currying

const arr = [1000, 9, 5, 7,25, 3,100, 85];

const bubbleSort = (arr) => {
    let temp;
    let sortedArray = arr;
    for (let outer = 0; outer < sortedArray.length; outer++) {
        for (let inner = outer + 1; inner <= sortedArray.length - 1; inner++) {
            if (sortedArray[inner] < sortedArray[outer]) {
                // swap the elements
                temp = sortedArray[outer];
                console.log(`inner loop ke ${inner} & outer loop ke ${outer} dgn temp = ${temp}`);
                sortedArray[outer] = sortedArray[inner];
                sortedArray[inner] = temp;
            };
        };
    };
    return sortedArray;
};

console.log(bubbleSort(arr));