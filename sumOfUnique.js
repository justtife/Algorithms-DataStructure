function sumOfUnique(nums) {
  let sum = 0;
  const numObj = {};
  for (let i of nums) {
    numObj[i] = (numObj[i] || 0) + 1;
  }
  for (let key in numObj) {
    if (numObj[key] === 1) {
      sum += Number(key);
    }
  }
  return sum;
}
console.log(sumOfUnique([1, 2, 3, 2])); // 4
console.log(sumOfUnique([1, 1, 1, 1, 1])); // 0
console.log(sumOfUnique([1, 2, 3, 4, 5])); // 15
