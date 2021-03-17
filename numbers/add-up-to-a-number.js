// find two array elements in an array that add up to a number
// once === true to show only first possible combinations, once === false for all possible combinations
const findSumFactor = (arr, weight, once = true) => {
  let hashTable = {};

  if (once) {
    for (var index = 0; index < arr.length; index++) {
      var el = arr[index],
        diff = Math.abs(el - weight);

      if (hashTable[el]) {
        return [el, hashTable[el]];
      } else {
        hashTable[diff] = el;
      }
      //   console.log(hashTable[diff]);
    }
    // clear hashTable
    hashTable = {};
    return -1;
  } else {
    const possibleCombinations = [];
    // loop pada array.forEach tdk akan exit walau ada return
    // There is no way to stop or break a forEach() loop other
    // than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.
    arr.forEach((el) => {
      var diff = Math.abs(el - weight);

      if (hashTable[el]) {
        possibleCombinations.push([el, hashTable[el]]);
      } else {
        hashTable[diff] = el;
      }
    });

    hashTable = {};
    return possibleCombinations;
  }
};

const arr2 = [2, 8, 6, 3, 45, 89, 0, 22];

let test = 8;
console.log(
  `possible sum factors of ${test}: `,
  findSumFactor(arr2, test, false)
);
console.log(`sum factors ${test}: `, findSumFactor(arr2, test));

test = 23;
console.log(
  `possible sum factors of ${test}: `,
  findSumFactor(arr2, test, false)
);
console.log(`sum factors of ${test}: `, findSumFactor(arr2, test));

test = 25;
console.log(
  `possible sum factors of ${test}: `,
  findSumFactor(arr2, test, false)
);
console.log(`sum factors of ${test}: `, findSumFactor(arr2, test));
