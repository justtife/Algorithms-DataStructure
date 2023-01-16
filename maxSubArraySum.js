function maxSubArraySum(arr, num) {
  if (num > arr.length) return null;
  //   let max = -Infinity;
  //   for (let i = 0; i < arr.length - num + 1; i++) {
  //     temp = 0;
  //     for (let j = 0; j < num; j++) {
  //       temp += arr[i + j];
  //       console.log(temp, i, j, arr[i + j]);
  //     }
  //     if (temp > max) {
  //       max = temp;
  //     }
  //   }
  //   return max;
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum + arr[j] - arr[j - num];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
}
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null
