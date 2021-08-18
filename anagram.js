const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const hash = {};

  for (let elm of str1) {
    if (!hash[elm]) {
      hash[elm] = 1;
    }
    ++hash[elm];
  }

  console.log(hash.length)

  for (let elm of str2) {
    if (!hash[elm]) return false;

    --hash[elm];
  }

  return true;
};

console.log(isAnagram("kombini", "nikombi"));
console.log(isAnagram("kombini", "nikombis"));
console.log(isAnagram("kombinis", "nikombi"));
