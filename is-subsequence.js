// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
  pointer1 = 0;
  pointer2 = 0;
  while (pointer1 < str1.length) {
    if (pointer2 === str2.length) return false;
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
      pointer2++;
    } else {
      pointer2++;
    }
  }
  return true;
}
