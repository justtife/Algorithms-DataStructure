function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }
  let str1Obj = {};
  //   let str2Obj = {};
  for (let a of str1) {
    str1Obj[a] = (str1Obj[a] || 0) + 1;
  }
  for (let b of str2) {
    if (!str1Obj[b]) {
      return false;
    } else {
      str1Obj[b] -= 1;
    }
  }
  return true;
  //   for (let key in str1Obj) {
  //     if (!(key in str2Obj)) {
  //       return false;
  //     }
  //     if (str1Obj[key] !== str2Obj[key]) {
  //       return false;
  //     }
  //     return true;
  //   }
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
