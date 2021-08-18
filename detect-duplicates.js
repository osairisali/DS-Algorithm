const areThereDuplicates = (...args) => {
  console.log('array: ', args)

  const memo = {};

  for (let i = 0; i < args.length; i++) {
    if (memo[args[i]]) return true;

    memo[args[i]] = 1;
  }

  return false;
};

console.log(areThereDuplicates('a', 'b', 'c', 'a'))
