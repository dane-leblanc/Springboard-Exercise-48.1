// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
  const frq1 = freqCount(int1.toString());
  const frq2 = freqCount(int2.toString());
  for (let digit in frq1) {
    if (frq1[digit] !== frq2[digit]) return false;
  }
  return true;
}

function freqCount(str) {
  let freq = {};
  for (let char of str) {
    freq[char] = freq[char] + 1 || 1;
  }
  return freq;
}
