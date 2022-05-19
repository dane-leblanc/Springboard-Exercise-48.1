// add whatever parameters you deem necessary
function pivotIndex(nums) {
  let leftSum = 0;
  let rightSum = nums.reduce((sum, a) => sum + a, 0) - nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
    rightSum -= nums[i + 1];
  }
  return -1;
}
