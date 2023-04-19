function twoSum(nums: number[], target: number) {
  const sumCache: any = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (sumCache[diff] !== undefined) {
      return [sumCache[diff], i];
    } else {
      sumCache[nums[i]] = i;
    }
  }
}

// twoSum([1, 3, 5, 7, 8], 9);

console.log(twoSum([1, 3, 5, 7, 8], 9));
