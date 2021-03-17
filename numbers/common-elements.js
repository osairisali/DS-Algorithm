const arr = [
  [6, 2, 5, 1, 9, 8],
  [2, 5, 1, 7, 6, 9, 8],
  [2, 3, 5, 1, 8, 4, 6, 8, 9, 45, 34],
  [ 6, 8, 9, 45, 34],
  [6]
]; // should return [6]

const commonEl = (arr) => {
  const hashTable = {};
  let commonEl = [];

  for (var i = 0; i < arr.length; i++) {
    const subArr = arr[i];
    let filtered = [];

    subArr.forEach((el) => {
      if (filtered.indexOf(el) === -1) filtered.push(el);
    });
    console.log("filtered subArr: ", filtered);

    filtered.forEach((el) => {
      if (!hashTable[el]) {
        hashTable[el] = 1;
      } else {
        hashTable[el]++;
      }
    });
  }

  for (var i in hashTable) {
    if (hashTable[i] === arr.length) commonEl.push(i);
  }

  console.log("hashTable: ", hashTable);

  return commonEl;
};

console.log("common elements: ", commonEl(arr));
