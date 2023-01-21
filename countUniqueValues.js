function countUniqueValues(arr) {
  //Space Complexity - o(1)
  if (arr.length === 0) return 0;
  let n = 1;
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== num) {
      num = arr[i];
      n++;
    }
  }
  return n;
  // Space Complexity - o(n)
  // let numOBJ = {};
  // for (let i of arr) {
  //   numOBJ[i] = (numOBJ[i] || 0) + 1;
  // }
  // return Object.keys(numOBJ).length;
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
