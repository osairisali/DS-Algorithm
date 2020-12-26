const Stack = require("./stack");

// masih perlu banyak perbaikan

let ARTH = "2.3+23/(12+3.14159)*.24";

const bracket = (arth) => {
  const s = new Stack();

  for (let i = 0; i < arth.length; i++) {
    // console.log(i);
    if (arth[i] === "(") {
      s.push(i);
    }
  }

  if (s.length() % 2 !== 0) {
    return s.peek();
  }
};

console.log(bracket(ARTH));

// solusi dari https://levelup.gitconnected.com/solving-balanced-brackets-in-javascript-with-stacks-edbc52a57309
let isBalanced = (input) => {
  let brackets = "[]{}()<>";
  let stack = [];

  for (let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket);
    console.log(
      `The current element is ${bracket}, which has an index in input of ${input.indexOf(
        bracket
      )}, and matches the bracket with index ${bracketsIndex} in brackets`
    );

    if (bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
      console.log(
        `this is an opening bracket. The address of its matching closing bracket in brackets is ${
          bracketsIndex + 1
        }. Adding that index to the stack makes the stack ${stack}`
      );
    } else {
      console.log(
        `this is a closing bracket, so ${stack.pop()} is being popped off the stack`
      );
      if (stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isBalanced(ARTH));
