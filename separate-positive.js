// add whatever parameters you deem necessary
function separatePositive(nums) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < 0) {
      let num = nums[i];
      nums.splice(i, 1);
      nums.push(num);
    }
  }
  return nums;
}
