function areThereDuplicates1(...args) {
  const numOBJ = {};
  for (let i of args) {
    numOBJ[i] = (numOBJ[i] || 0) + 1;
  }
  for (key in numOBJ) {
    if (numOBJ[key] > 1) return true;
  }
  return false;
}

function areThereDuplicates2() {
  return new Set(arguments).size !== arguments.length;
}
console.log(areThereDuplicates1(1, 2, 3)); // false
console.log(areThereDuplicates1(1, 2, 2)); // true
console.log(areThereDuplicates1("a", "b", "c", "a")); // true
console.log(areThereDuplicates2(1, 2, 3)); // false
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates2("a", "b", "c", "a")); // true
