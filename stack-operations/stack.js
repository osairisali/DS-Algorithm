class Stack {
  constructor() {
    this.data = [];
    // untuk menentukan length dan posisi data
    this.top = 0;
    this.pop = this.pop.bind(this);
    this.push = this.push.bind(this);
    this.peek = this.peek.bind(this);
    this.clear = this.clear.bind(this);
  }

  // method untuk mengeluarkan elemen terakhir dari stack
  pop() {
    return this.data[--this.top];
  }

  // method untuk memasukkan data ke elemen terakhir dari stack
  push(obj) {
    return (this.data[this.top++] = obj);
  }

  // method untuk melihat elemen dari stack terakhir
  peek() {
    return this.data[this.top - 1];
  }

  // method untuk lihat jumlah elemen dari stack
  length() {
    return this.top;
  }

  // method untuk clear stack
  clear() {
    return (this.top = 0);
  }

  getData() {
    return this.data;
  }

  getTop() {
    return this.top;
  }
}

// console.log(new Stack());

// export default Stack;
// exports.stack = Stack;
module.exports = Stack;

// run in terminal like this $ node --experimental-modules ./stack-operations/bracket-suggestion.js
