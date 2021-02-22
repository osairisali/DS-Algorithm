// materi algoritma ini ada di https://titanwolf.org/Network/Articles/Article?AID=9e4ad0de-d784-4c36-9869-18b931475252#gsc.tab=0
// algorithm yang digunakan adalah heap algorithm

// const generatePermutation = (perm, pre, post, m) => {
//   let elem, i, rest, len;

//   // metode yg dipakai adalah looping dengan rekursif
//   if (m > 0)
//     // looping ke semua elemen array asal
//     for (i = 0, len = post.length; i < len; ++i) {
//       // Make a copy of the array: There are several ways to use the concat in addition to this
//       rest = [...post];
//       console.log("rest: ", rest);

//       // ambil satu elemen terdepan dari rest sekaligus hapus elemen itu dr rest
//       elem = rest.splice(i, 1);
//       console.log("elem: ", elem);

//       // perhatikan bahwa perm, pre, post, dan n dideklarasikan sbg variabel
//       // pada function, agar variabel ini bertahan saat recursive dilakukan.
//       // recursive hingga m level
//       console.log(pre);
//       generatePermutation(perm, pre.concat(elem), rest, m - 1);
//     }
//   else {
//     // perm adalah array terluar dg elemen array pre
//     // array pre.length = m
//     perm.push(pre);
//   }

//   return perm;
// };

// // const arr = [1, 5, "a", 9, "c", "l"];
// const arr = [0, 1, 2, 3];
// const permArr = generatePermutation([], [], arr, 3);
// console.log("permutation generated: ", permArr);

// // jumlah permutasi adalah n!/(n-m)!, dgn n adalah jumlah elemen array asal (len)
// // dan m adalah jumlah elemen permutasi, dalam hal ini adalah 3.
// console.log("length generatePermutation: ", permArr.length);

// console.log(arr.splice(1, 1));
// console.log(arr);

// buatan sendiri setelah belajar
const permutation = (mainArray, numbers, subArray = [], m) => {
  if (m > 0) {
    // iterasi pada semua elemen numbers
    for (let i = 0; i < numbers.length; ++i) {
      // console.log("m: ", m);

      // ambil elemen sebagai filter
      let element = numbers[i];
      let filtered = numbers.filter((el) => el !== element);

      // recursive untuk masing-masing elemen numbers
      // ini klo pake --m, hasilnya nggak sesuai, jadi pake m-1, soalnya --m mekanismenya m = m - 1
      permutation(mainArray, filtered, subArray.concat(element), m - 1);
    }
  } else {
    mainArray.push(subArray);
  }

  return mainArray;
};

const arr = [0, 1, 2, 3, "a", "b", "c"];
let subArray = [];
let mainnArray = [];
let m = 7;
const permArray = permutation(mainnArray, arr, subArray, m);
console.log("mainArray: ", mainnArray);
console.log("subArray: ", subArray);
console.log("m: ", m);
console.log("generated permutation: ", permArray);
console.log("length of permutations: ", permArray.length);