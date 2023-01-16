function sameFrequency(num1, num2) {
  // good luck. Add any arguments you deem necessary.
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  let obj1 = {};
  for (let i of str1) {
    obj1[i] = (obj1[i] || 0) + 1;
  }
  for (let i of str2) {
    if (!obj1[i]) {
      return false;
    } else {
      obj1[i]--;
    }
  }
  return true;
}
console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22,222)) // false