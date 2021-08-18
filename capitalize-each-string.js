// Logic Simple : Complete the function below
// any input string data should be capitalize the first letter each word
// and the word will be separated by only one space

// function solutions(str) {
//   let newString = "";

//   for (let i = 0, newWord = true; i < str.length; i++) {
//     if (newWord) {
//       newSrting = str[i];
//     } else {
//       newString = str[i];
//     }
//     newWord = str[i] === "" ? true : false;
//   }
//   return newString;
// }

function solutions(str) {
  let newString = "";

  const isNewWord = (i) =>
    (str[i - 1] === " " || str[i - 1] === undefined) && str[i] !== " "
      ? true
      : false;

  const isEndWord = (i) => str[i] !== " " && str[i + 1] === " ";

  const isMiddleWord = (i) => str[i] !== " " && !isEndWord(i);

  for (let i = 0; i < str.length; i++) {
    if (isNewWord(i)) {
      newString += str[i].toUpperCase();
    } else {
      if (isEndWord(i)) {
        newString += str[i] + " ";
      }

      if (isMiddleWord(i)) {
        newString += str[i];
      }
    }
  }
  return newString;
}

const solutions2 = (str) => {
  let newStr = [];
  const splittedStr = str.toLowerCase().split(" ");
  console.log(splittedStr);

  for (let word of splittedStr) {
    if (word !== "") {
      const firstChar = word[0].toUpperCase();
      const restChar = word.slice(1, word.length);
      word = firstChar.concat(restChar);
      newStr.push(word);
      console.log(newStr);
    }
  }

  return newStr.join(" ");
};

// example:
// input string : "the world   in    your      hands"
// output expection: "The World In Your Hands"
// Note: if you wanna build your own function, feel free to make it

console.log(solutions("the world   in    your      hands"));
// console.log(solutions2("the world   in    your      hands"));
