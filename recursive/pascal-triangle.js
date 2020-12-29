const pascalFixture = [1, [1, 1], [1, 2, 1], [1, 3, 3, 1]];

const pascalTriangle = (numArr, mainArray = [[1], [1, 1]]) => {
  if (numArr > 2) {
    const childArr = [1];

    // make child array
    const subMainArray = mainArray[mainArray.length - 1];
    // console.log("subMainArray: ", subMainArray);
    for (let el = 1; el < subMainArray.length; el++) {
      // [1, 1]
      const value = subMainArray[el - 1] + subMainArray[el];
      // console.log("value: ", value);
      childArr.push(value);
      // console.log("childArr: ", childArr);
    }
    childArr.push(1);

    mainArray.push(childArr);
    // console.log("mainArray: ", mainArray);

    return pascalTriangle(numArr - 1, mainArray);
  } else {
    return mainArray;
  }
};

console.log(pascalTriangle(5));
