// add whatever parameters you deem necessary
function longestFall(nums) {
  let longestFall = 0;
  let currentFall = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      currentFall++;
    } else {
      currentFall = 1;
    }
    longestFall = Math.max(longestFall, currentFall);
  }
  return longestFall;
}

console.log(longestFall([5]));
