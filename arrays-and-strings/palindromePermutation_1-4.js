const palindromePermutation = (string) => {
  let check = 0;
  const counts = countCharacters(string);
  for (let char in counts) {
    if (counts[char] % 2 !== 0) {
      check++;
      if (check > 1) return false;
    }
  }
  return true;
}

const countCharacters = (string) => {
  return string.toLowerCase().split('').reduce((a, b) => {
    if (b !== ' ') {
      a[b] ? a[b]++ : a[b] = 1;
    }
    return a;
  }, {});  
}

console.log(palindromePermutation('taco cat'))