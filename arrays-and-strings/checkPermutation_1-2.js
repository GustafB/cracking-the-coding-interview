//#### SORTING #### (O(n log n))

const checkPermutation = (strA, strB) => {
  strA = sortString(strA);
  strB = sortString(strB);
  return strA === strB;
}

const sortString = (string) => {
  return string.split('').sort((a, b) => a.localeCompare(b)).join('');
}


//#### ASCII SUM #### (O(n + m))

const checkPermutation = (strA, strB) => {
  if (strA.length !== strB.length) return false;
  return asciiSum(strA) === asciiSum(strB);
}

const asciiSum = (string) => {
  return string.split('').reduce((a, b) => {
    return a + b.charCodeAt(0);
  }, 0);
}
