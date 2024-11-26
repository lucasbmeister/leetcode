function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (map.has(target - num)) {
      return [map.get(target - num)!, i];
    }

    map.set(num, i);
  }
  return [];
}

console.log(twoSum([-3, 3, 2, 15], 0));
