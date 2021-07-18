const isPrimeRecursive = (num, divisor = num - 1) => {
  if (num === 2) {
    return false;
  } else if (num === 1) {
    return true;
  }

  if (divisor === 1) {    
    return true;
  }
  if (num % divisor === 0) {
    console.log(`num: ${num} with divisor: ${divisor}`)
    return false;
  }

  console.log(`num: ${num} with divisor: ${divisor}`)
  return isPrimeRecursive(num, divisor - 1);
};

console.log(isPrimeRecursive(103));
