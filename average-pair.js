// add whatever parameters you deem necessary
function averagePair(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if ((nums[left] + nums[right]) / 2 === target) {
      return true;
    } else if ((nums[left] + nums[right]) / 2 < target) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));
