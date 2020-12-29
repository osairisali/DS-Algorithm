const isPrime = (num, divisor = num - 1) => {
  if (num === 2) {
    return false;
  } else if (num === 1) {
    return true;
  }

  if (divisor === 1) {
    return true;
  }
  if (num % divisor === 0) {
    return false;
  }

  const result = isPrime(num, divisor - 1);
  return result;
};

console.log(isPrime(103));
