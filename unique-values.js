// unique numbers using two pointers

function countUniqueValues(sortedArr) {
  if (sortedArr.length === 0) return 0;
  
  let i = 0; // 0,1,3
  let j = 0; // 0,1,2,3
  let uniqueVal = []; // 1,3,5

  uniqueVal.push(sortedArr[0]);

  while (i <= j && j < sortedArr.length) {
    if (sortedArr[i] === sortedArr[j]) {
      ++j;
      continue;
    }

    uniqueVal.push(sortedArr[j]);
    i = j;
  }

  return uniqueVal.length;
}

console.log(countUniqueValues([1, 3, 3, 5, 6, 7, 9, 9, 10]));
console.log(countUniqueValues([1, 1,1,1,1,2]));
console.log(countUniqueValues([1, 2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));
