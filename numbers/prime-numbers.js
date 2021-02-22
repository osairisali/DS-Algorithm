// optimal primality test
const isPrime = (n) => {
  // number <= than 1 is not a prime
  if (n <= 1) return false;

  // for 2 and 3 are primes
  if (n <= 3) return true;

  // look for modulus with 2 and 3
  if (n % 2 === 0 || n % 3 === 0) return false;

  // look for modulus of other odd numbers
  // for arithmatic teoretical reference, see Javascript Data Structure and Algorithm by Sammie Bae
  for (var i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
};

console.log(isPrime(2368746358418)); // false
console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(2)); // true
console.log(isPrime(37)); // true
console.log(isPrime(93)); // false

// prime factorization
const primeFactors = (n) => {
  // extract even number factors from n
  while (n % 2 === 0) {
    console.log(2);
    n /= 2;
  }

  // test if remaining n has modulus with odd number factors
  for (var i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      console.log(i);
      n /= i;
    }
  }

  // handle remaining prime number factors
  if (n > 2) console.log(n);
};

console.log("prime factors for 40: ")
primeFactors(40);
console.log("prime factors for 99: ")
primeFactors(99);

