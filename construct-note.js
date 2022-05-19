// add whatever parameters you deem necessary
// O (2M + N) where M is the length of str1 and N is the length of string 2

function constructNote(str1, str2) {
  const charFreq1 = frequencyCounter(str1);
  const charFreq2 = frequencyCounter(str2);
  for (let key of charFreq1.keys()) {
    if (!charFreq2.get(key) || charFreq2.get(key) < charFreq1.get(key))
      return false;
  }
  return true;
}

function frequencyCounter(str) {
  let charFreq = new Map();
  for (let char of str) {
    let charCount = charFreq.get(char) || 0;
    charFreq.set(char, charCount + 1);
  }
  return charFreq;
}

console.log(constructNote("aa", "dcba"));
