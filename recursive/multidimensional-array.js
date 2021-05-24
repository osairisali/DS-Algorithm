makeJaggedArray = (rows, columns) => {
  let jaggedArray = new Array(rows);
  for (let i = 0; i < jaggedArray.length; i++) {
    jaggedArray[i] = new Array(columns);
  }
  return jaggedArray;
};

fillJaggedArray = (matrix, elements) => {
  // deep clone matrix, because array is reference based operation
  // Array.from() and Array.slice() are using reference operations
  // spread operator only works as shallow clone, deeper level arrays are referenced
  // let matrixTofill = JSON.parse(JSON.stringify(matrix));

  // another solution to deep clone array is using recursive
  const clone = (items) =>
    items.map((item) => (Array.isArray(item) ? clone(item) : item));

  let matrixToFill = clone(matrix);
  console.log("matrixToFill: ", matrix);

  let totalInd = 0;
  for (let rowInd = 0; rowInd < matrixToFill.length; rowInd++) {
    for (let colInd = 0; colInd < matrixToFill[rowInd].length; colInd++) {
      matrixToFill[rowInd][colInd] = elements[totalInd];
      totalInd++;
    }
  }
  return matrixToFill;
};

const mat3By3 = makeJaggedArray(3, 3);
console.log("mat3By3: ", mat3By3);
const filledMat = fillJaggedArray(mat3By3, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("filled matrix: ", filledMat);
console.log("mat3By3: ", mat3By3); // kenapa ikut berubah???

const obj = {
  name: "ali",
  detail: {
    home: "TPJ",
    phone: [0215, 3256, [1], [1, [2, [3]]]],
    occupation: "web developer",
    skill: { "data strutures": "best", algorithm: "best", coding: "average" },
  },
  realtive: "none",
};

const cloneArray = (array) => {
  return array.map((el) => (Array.isArray(el) ? cloneArray(el) : el));
};

const clonedArray = cloneArray(obj.detail.phone);
clonedArray[1] = 23232323232323232323;
console.log(obj.detail.phone);
console.log(clonedArray);

const deepClone = (obj, temp = {}, tempArr = []) => {
  for (let prop in obj) {
    if (typeof obj[prop] === "object" && !Array.isArray(obj[prop])) {
      temp[prop] = deepClone(obj[prop]);
    }
    if (Array.isArray(obj[prop])) {
      tempArr.push(cloneArray(obj[prop]));
      temp[prop] = tempArr;
    }
    temp[prop] = obj[prop];
  }
  return temp;
};

const clonedObj = deepClone(obj);
console.log("deepCloned: ", clonedObj);
clonedObj["name"] = "akbar";
console.log("obj: ", obj);
console.log("clonedObj: ", clonedObj);
console.log(Array.from(clonedObj.detail.phone))
console.log(cloneArray(clonedObj.detail.phone))