const twoSum = (nums, target) => {
  const len = nums.length;
  const sumCache = {};

  for (let i = 0; i < len; i++) {
    const value = nums[i];
    // 计算差值
    const diff = target - value;
    // 如果差值已经存在过，直接返回对应的索引
    if (typeof sumCache[diff] !== "undefined") {
      return [sumCache[diff], i];
    } else {
      // 否则存起来
      sumCache[value] = i;
    }
  }
};
