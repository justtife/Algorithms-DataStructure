function averagePair(arr, num) {
  //Big O Notation - O(n)
  let first = 0;
  let second = arr.length - 1;
  if (arr.length < 1) return false;
  while (arr[first] < arr[second]) {
    let averageSumOfTwo = (arr[first] + arr[second]) / 2;
    if (averageSumOfTwo == num) return true;
    else if (averageSumOfTwo > num) {
      second--;
    } else {
      first++;
    }
  }
  return false;
  //Big O notation - O(n^2)
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if ((arr[i] + arr[j]) / 2 === num) return true;
  //     }
  //   }
  //   return false;
}
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
