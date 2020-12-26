const Stack = require('./stack.js');

// import Stack from './stack.js'

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