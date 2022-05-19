// add whatever parameters you deem necessary
function twoArrayObject(keyArr, valueArr) {
  let output = {};
  for (let i = 0; i < keyArr.length; i++) {
    valueArr[i]
      ? (output[keyArr[i]] = valueArr[i])
      : (output[keyArr[i]] = null);
  }
  return output;
}

console.log(twoArrayObject(["a", "b", "c", "d"], [1, 2, 3]));
