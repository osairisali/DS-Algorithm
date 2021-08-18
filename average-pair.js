// arr is sorted
const averagePair = (arr, target) => {
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];

    var k = i + 1;
    while (k < arr.length) {
      var num2 = arr[k];
      if ((num + num2) / 2 === target) return true;

      k++;
    }
  }

  return false;
};

console.log(averagePair([1, 3, 3, 5], 2.5));

// arr is sorted
const averagePair2 = (arr, target) => {
  var start = 0;
  var end = arr.length - 1;

  while (start < end) {
    var avg = (arr[start] + arr[end]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      start++;
    } else {
      end--;
    }
  }
};
