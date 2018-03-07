const compressString = (string) => {
  let compressedString = '';
  let currentCount = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == string[i + 1]) {
      currentCount++;
    } else {
      compressedString += string[i] + currentCount;
      currentCount = 1;
    }
  }
  return compressedString.length < string.length ? compressedString: string;
}
