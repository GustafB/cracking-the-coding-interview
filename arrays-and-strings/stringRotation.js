const stringRotation = (s1, s2) => {
  for (let i = 0; i < s1.length; i++) {
    const first = s1.slice(0, i)
    const second = s1.slice(i)
    if (second + first == s2) return true;
  }
  return false;
}