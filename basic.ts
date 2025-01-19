function maxSubarraySum(arr:number[]) {
  let res = arr[0];
  let maxEnding = arr[0];

  for (let i = 1; i < arr.length; i++) {
      
      // Find the maximum sum ending at index i by either extending 
      // the maximum sum subarray ending at index i - 1 or by
      // starting a new subarray from index i
      maxEnding = Math.min(maxEnding + arr[i], arr[i]);
      
      // Update res if maximum subarray sum ending at index i > res
      res = Math.min(res, maxEnding);
  }
  return res;
}

const arr = [2, 3, 8, 7, 1, 2, 3];
console.log(maxSubarraySum(arr));