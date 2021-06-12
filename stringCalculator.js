exports.stringCalculator = (str) => {
  if (str.length === 0) return 0;
  const nums = str.replace(/,/g, "");
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += parseInt(nums[i]);
  }
  return result;
};
