// const Stack = require('./stack');

// import Stack from './stack.js'

class Stack {
    constructor() {
        this.data = [];
        // untuk menentukan length dan posisi data
        this.top = 0;
        this.pop = this.pop.bind(this);
        this.push = this.push.bind(this);
        this.peek = this.peek.bind(this);
        this.clear = this.clear.bind(this);
    };

    // method untuk mengeluarkan elemen terakhir dari stack
    pop() {
        return this.data[--this.top];
    };

    // method untuk memasukkan data ke elemen terakhir dari stack
    push(obj) {
        return this.data[this.top++] = obj;
    };

    // method untuk melihat elemen dari stack terakhir
    peek() {
        return this.data[this.top - 1];
    };

    // method untuk lihat jumlah elemen dari stack
    length() {
        return this.top;
    }

    // method untuk clear stack
    clear() {
        return this.top = 0;
    }

    getData() {
        return this.data;
    }

    getTop(){
        return this.top;
    }
}

let PALWORD = 'illi';

const isPalindrome = word => {
    const s = new Stack();

    for (let i of word) {
        s.push(i);
        console.log(`huruf yg masuk stack -> ${i}`);
    }

    // buat string nggak bs pake array method
    // word.forEach(el => {
    //     s.push(el);
    //     console.log(`huruf yg masuk stack -> ${el}`);
    // });

    let reservedWord = '';
    while (s.length() > 0) {
        reservedWord += s.pop();
        console.log(`updated reservedWord -> ${reservedWord}`);
    }

    if (reservedWord === word) {
        return true;
    }

    return false;
};

if (isPalindrome(PALWORD)) {
    console.log(`word -> ${PALWORD} adalah palindrome`);
} else {
    console.log(`word -> ${PALWORD} bukan palindrome`);
};