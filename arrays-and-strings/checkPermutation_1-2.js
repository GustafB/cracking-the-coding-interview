//#### SORTING #### (O(n log n))

const checkPermutation = (strA, strB) => {
  strA = sortString(strA);
  strB = sortString(strB);
  return strA === strB;
}

const sortString = (string) => {
  return string.split('').sort((a, b) => a.localeCompare(b)).join('');
}