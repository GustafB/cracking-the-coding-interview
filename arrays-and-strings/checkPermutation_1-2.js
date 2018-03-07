//#### SORTING #### (O(n log n))

const checkPermutation = (strA, strB) => {
  if (strA.length !== strB.length) return false;

  strA = sortString(strA);
  strB = sortString(strB);
  
  return strA === strB;
}

const sortString = (string) => {
  return string.split('').sort((a, b) => a.localeCompare(b)).join('');
}


//#### BUFFER #### Time: O(n) Space: O(n + m);
// Assumes case insensitivity
const checkPermutation = (strA, strB) => {
  if (strA.length !== strB.length) return false;

  const cases = new Array(26).fill(0);
  const arrA = fillArray(strA, cases, 1);
  const result = fillArray(strB, arrA, 0);

  return result.reduce((a, b) => a + b) === 0;
}

const fillArray = (string, array, dir) => {
  string.split('').forEach(char => {
    const alphaIdx = char.charCodeAt(0) - ('a').charCodeAt(0);
    dir === 0 ? array[alphaIdx]-- : array[alphaIdx]++;
  });
  return array;
}