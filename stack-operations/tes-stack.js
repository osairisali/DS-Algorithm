// import Stack from './stack.js';

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

// ujicoba
const s = new Stack();

s.push('haloo');
console.log(s.peek());
s.push(99);
console.log(s.peek());

const elem = [5, 0, 6, 99, 'haha', 'kitsune', 100, 'senko'];
elem.forEach(el => {
    s.push(el);
    console.log('elemen masuk ke stack -> ', el);
});

console.log('tampilan data dalam stack sebelum clearing...');
console.table(s.getData());

console.log('tampilan data setelah clearing...');
s.clear();
console.log(`menggunakan method peek() -> ${s.peek()}`);
console.log(`bagaimana dgn tampilan data -> ${s.getData()}`);

console.log('menggunakan array lain yg diinput');
const elem2 = ['hana', 'monogatari', 55, 77, 'kanojo'];
elem2.forEach(el => {
    s.push(el);
    console.log(`elemen yg masuk -> ${el}`);
});
console.log(`tampilan data stack baru -> ${s.getData()}`);
console.log(`kalo pake peek() tetap akan tampilkan data terakhir yg diinput -> ${s.peek()}`);
console.log(`tampilan top() -> ${s.getTop()}`);