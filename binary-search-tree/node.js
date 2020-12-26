class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    // without explicit binding, but must use arrow function+
    // no need to set method in constructor with arrow function
    // this.show = this.show;
  }

  show = () => {
    return this.data;
  };
}

// const nd = new Node(5, null, null);
// console.log("nd: ", nd);
// console.log("nd.show(): ", nd.show());

// const obj = {
//   data: 7,
//   show: function () {
//     // immediatly invoke function execution
//     return (() => this.data)();
//   },
//   nd,
// };

// still return 5, even without binding
// console.log(obj.nd.show());

// return 7
// console.log(obj.show());

module.exports = Node;