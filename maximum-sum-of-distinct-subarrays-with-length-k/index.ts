function maximumSubarraySum(nums: number[], k: number): number {
  const currentWindow = new Map<number, number>();
  let currentSum = 0;
  let maxSum = 0;
  let count = 0;

  for (let index = 0; index < nums.length; index++) {
    const alreadyAdded = currentWindow.get(nums[index]) || 0;

    currentWindow.set(nums[index], alreadyAdded + 1);

    currentSum += nums[index];

    if (index + 1 > k) {
      currentSum -= nums[count];
      const newCount = currentWindow.get(nums[count])! - 1;

      if (newCount === 0) {
        currentWindow.delete(nums[count]);
      } else {
        currentWindow.set(nums[count], newCount);
      }

      count++;
    }

    if (currentWindow.size === k) {
      maxSum = Math.max(maxSum, currentSum);
    }
  }

  return maxSum;
}

console.log(maximumSubarraySum([1, 1, 4, 2, 9, 9, 9], 3));
//console.log(maximumSubarraySum([4,4,4], 3));
