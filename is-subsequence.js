const isSubsequence = (order, target) => {
  var found = [];
  var k = 0;
  for (var i = 0; i < order.length; i++) {
    var el = order[i];

    while (k < target.length) {
      if (target[k] === el) {
        found.push(target[k]);
        k++;
        break;
      }
      k++;
    }
  }

  console.log("found: ", found);
  for (var i = 0; i < order.length; i++) {
    if (order[i] !== found[i]) return false;
  }

  return true;
};

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("hello", "hevleralo world")); // true
console.log(isSubsequence("hello", "hlveralo world")); // false; order matter

// iterative solution
const isSubsequence2 = (order, target) => {
  var i = 0;
  var j = 0;

  while (j < target.length) {
    if (target[j] === order[i]) i++;
    if (i === order.length) return true;
    j++;
  }
  return false;
};

console.log(isSubsequence2("hello", "hello world")); // true
console.log(isSubsequence2("hello", "hevleralo world")); // true
console.log(isSubsequence2("hello", "hlveralo world")); // false; order matter

// recursive solution
const isSubsequenceRecursive = (order, target) => {
  if (order.length === 0) return true;
  if (target.length === 0) return false;

  if (order[0] === target[0])
    return isSubsequenceRecursive(order.slice(1), target.slice(1));

  return isSubsequenceRecursive(order, target.slice(1));
};

console.log(isSubsequenceRecursive("hello", "hello world")); // true
console.log(isSubsequenceRecursive("hello", "hevleralo world")); // true
console.log(isSubsequenceRecursive("hello", "hlveralo world")); // false; order matter
