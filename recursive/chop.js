// chop(6)  --> 5 * 1 = 5; 4 * 2 = 8; 3 * 3 = 9; pilih 9
//          --> 2 * 3 * 1 = 6
// chop(5)  --> 4 * 1 = 4; 3 * 2 = 6; pilih 6
//          --> 2 * 2 * 1 = 4;
// chop(4)  --> 3 * 1 = 3; 2 * 2 = 4; pilih 4

const chop = (num) => {
  const memo = {};

  const recursive = (numChop) => {
    let largestProduct;

    if (numChop > 1) {
      // faktor integer diatas 1 adalah 2 dan/atau 3
      for (var i = 2; i <= 3; i++) {
        let remainder = numChop - i;

        if (remainder > 0 && remainder <= 3) {
          largestProduct = remainder * i;

          if (!memo[numChop] || memo[numChop] < largestProduct) {
            memo[numChop] = largestProduct;
          }
        } else {
          let largestProductRemainder = memo[remainder];
          if (!largestProductRemainder) {
            largestProductRemainder = recursive(remainder);
          }
          largestProduct = largestProductRemainder * i;
          if (!memo[numChop] || memo[numChop] < largestProduct) {
            memo[numChop] = largestProduct;
          }
        }
      }
      return memo[numChop];
    } else {
      return "not a positive integer";
    }
  };

  return recursive(num);
};

const largestChopProduct = chop(125);
console.log(largestChopProduct);

// cara linear
const chopLinear = (numChop) => {
  if (numChop <= 3) return numChop;

  let power2 = 0;
  let power3 = Math.floor(numChop / 3);
  const remainder = numChop % 3;

  if (remainder === 1) {
    power3 -= 1;
    power2 = 2;
  }

  if (remainder === 2) {
    power2 = 1;
  }

  return (3**power3) * (2**power2);
};

const largestChopProductLinear = chopLinear(125);
console.log(largestChopProductLinear);
