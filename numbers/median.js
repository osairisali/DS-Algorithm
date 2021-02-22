// find median of two sorted arrays of the same size
const findMedian = (arr1, arr2 = []) => {
  // merge arrays
  const mergedArr = [...arr1, ...arr2].sort((a, b) => {
    return a - b;
  });

  console.log("sorted array: ", mergedArr);

  if (mergedArr.length % 2 === 0) {
    const middleIndex = Math.floor(mergedArr.length / 2);
    console.log(mergedArr[middleIndex - 1], mergedArr[middleIndex]);
    const median = (mergedArr[middleIndex] + mergedArr[middleIndex + 1]) / 2;
    return median;
  }

  const middleIndex = Math.ceil(mergedArr.length / 2);
  const median = mergedArr[middleIndex - 1];
  return median;
};

const arr1 = [4, 9, 68, 10, 4];
const arr2 = [2, 8, 6, 3, 45, 89, 0, 22];

console.log(findMedian(arr1, arr2));
// findMedian(arr1, arr2)
