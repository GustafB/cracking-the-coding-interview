const urlify = (string) => {
  const array = string.split(' ');
  let url = '';
  array.forEach((word, i) => {
    if (word && array[i + 1]) url += word + '%20';
    else if (!word && array[i + 1]) url += '%20';
    else url += word;
  })
  return url;
}

console.log(urlify("hello        how is    you"));