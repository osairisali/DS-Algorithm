// find two array elements in an array that add up to a number
// once === true to show only first possible combinations, once === false for all possible combinations
const findSumFactor = (arr, weight, once = true) => {
  if (once) {
    const hashTable = {};

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

    return -1;
  } else {
    const hashTable = {};
    let possibleCombinations = [];

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

    return possibleCombinations;
  }
};

const arr2 = [2, 8, 6, 3, 45, 89, 0, 22];

console.log("sum factors: ", findSumFactor(arr2, 8, false));
console.log("sum factors: ", findSumFactor(arr2, 8));

