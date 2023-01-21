function isSubsequence1(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

//Recursive Method
//Space Complexity - O(1)
function isSubsequence2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence2(str1.slice(1), str2.slice(1));
  return isSubsequence2(str1, str2.slice(1));
}

console.log(isSubsequence1("hello", "hello world")); // true
console.log(isSubsequence1("sing", "sting")); // true
console.log(isSubsequence1("abc", "abracadabra")); // true
console.log(isSubsequence1("abc", "acb")); // false (order matters)

console.log(isSubsequence2("hello", "hello world")); // true
console.log(isSubsequence2("sing", "sting")); // true
console.log(isSubsequence2("abc", "abracadabra")); // true
console.log(isSubsequence2("abc", "acb")); // false (order matters)
