const sameFrequency = (a, b) => {
  const numA = String(a).split('');
  let numB = String(b).split('');


  if (numA.length !== numB.length) return false;

  for (let idx = 0; idx < numA.length; idx++) {
    const elemA = numA[idx];
    console.log(`elemA ${elemA}`);

    numB = numB.filter((elemB) => elemB !== elemA);
    console.log(`numB ${numB}`);
  }

  return numB.length === 0;
};

console.log(sameFrequency(215594, 945521));
