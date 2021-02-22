const arr = [
  [6, 2, 5, 1, 9, 8],
  [2, 5, 1, 7, 6, 9, 8],
  [2, 3, 5, 1, 8, 4],
]; // should return [1, 2,5,8]

const commonEl = (arr) => {
  const hashTable = {};
  let commonEl = [];

  for (var i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    let filtered = [];

    for (var j = 0; j < subArr.length; j++) {
      const el = subArr[j];
      if (filtered.indexOf(el) === -1) {
        filtered.push(el);
      }
    }

    for (var k = 0; k < filtered.length; k++) {
      const el = filtered[k];
      if (!hashTable[el]) {
        hashTable[el] = 1;
      } else {
        hashTable[el]++;
      }
    }
  }

  for (var i in hashTable) {
    if (hashTable[i] === arr.length) commonEl.push(i);
  }

  return commonEl;
};

console.log(commonEl(arr));
