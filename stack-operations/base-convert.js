const Stack = require("./stack");

/*
A stack can be used to convert a number from one base to another base. Given a number,
n, which we want to convert to a base, b, here is the algorithm for performing the
conversion:
1. The rightmost digit of n is n % b. Push this digit onto the stack.
2. Replace n with n / b.
3. Repeat steps 1 and 2 until n = 0 and there are no significant digits remaining.
4. Build the converted number string by popping the stack until the stack is empty.
*/

const convertBase = (number, base) => {
  const s = new Stack();
  // langkah 1-3
  do {
    s.push(number % base);
    number = Math.floor((number /= base));
  } while (number > 0);

  let converted = "";
  while (s.length() > 0) {
    converted += s.pop();
  }

  return converted;
};

// uji coba
let NUM = 32;
let BAS = 2;

console.log(`basis ${BAS} dari ${NUM} adalah ${convertBase(NUM, BAS)}`);
